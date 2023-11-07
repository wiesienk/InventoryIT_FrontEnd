import React, {useEffect, useState} from 'react';
import { EquipmentTypes } from 'types';


export const AddEquipment = ()=> {
    const [users, setUsers] = useState([]);
    const [savedEquipment, setSavedEquipment] = useState(false);
    const [formData, setFormData] = useState({
        type: "",
        name: "",
        serialNumber: "",
        userID: ""
    });

    useEffect(() => {
        fetch("http://localhost:3001/user/usersid")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await fetch("http://localhost:3001/equipment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        setFormData({type: "",
            name: "",
            serialNumber: "",
            userID: ""})
        setSavedEquipment(true)
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className='addForm'>
            <div>
                <label>
                    Rodzaj Wyposażenia:
                    <select required={true} name="type" value={formData.type} onChange={handleInputChange}>
                        <option value="" disabled>
                            Wybierz rodzaj wyposażenia
                        </option>
                        {EquipmentTypes.map((option, index) => (
                            <option key={index} value={option.toLowerCase()}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Nazwa:
                    <input required={true} type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Numer Seryjny:
                    <input required={true} type="text" name="serialNumber" value={formData.serialNumber} onChange={handleInputChange} />
                </label>
            </div>
            <div>
                <label>
                    Użytkownik:
                    <select required={true} name="userID" value={formData.userID} onChange={handleInputChange}>
                        <option value="" disabled>
                            Wybierz użytkownika
                        </option>
                        {users.map((user: { id: string, lastName: string }) => (
                            <option key={user.id} value={user.id}>
                                {`${user.lastName}`}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button className='btn' type="submit">Zapisz</button>
            {savedEquipment && <p>Dodano sprzęt</p>}
        </form>
    );
};