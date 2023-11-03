import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {EquipmentDetailsResponse, UpdateEquipment, EquipmentTypes} from "types"

export const EquipmentDetails: React.FC = () =>   {
    const { id } = useParams<{ id: string }>();
    const [equipment, setEquipment] = useState<EquipmentDetailsResponse>({name: '',
    type:"",serialNumber:"",user:{id:"",lastName:"",firstName:"",email:""},id:""});
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState<UpdateEquipment>({
        name: '',
        type: '',
        serialNumber: '',
        userID: '',
    });
    const [users, setUsers] = useState<{ id: string; lastName: string }[]>([]);

    useEffect(() => {
        fetchEquipment();
        fetchUsers();
    }, []);

    const fetchEquipment = async () => {
        try {
            const response = await fetch(`http://localhost:3001/equipment/${id}`);
            const data = await response.json();
            setEquipment(data);
        } catch (error) {
            console.error('Error fetching equipment', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/user/usersid');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    const handleEdit = () => {
        setEditMode(true);
        setFormData({
            name: equipment.name,
            type: equipment.type,
            serialNumber: equipment.serialNumber,
            userID: equipment.user.id,
        });
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Czy na pewno usunąć sprzęt?');
        if (confirmDelete) {
            try {
            await fetch(`http://localhost:3001/equipment/${id}`, {
                method: 'DELETE',
            });
            setEquipment({name: '',
                type:"",serialNumber:"",user:{id:"",lastName:"",firstName:"",email:""},id:""})
        } catch (error) {
            console.error('Error deleting equipment', error);
        }}

    };

    const handleSave = async () => {
        try {
            await fetch(`http://localhost:3001/equipment/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            await fetchEquipment();
            setEditMode(false);
        } catch (error) {
            console.error('Error updating equipment', error);
        }
    };

    if (!equipment) {
        return <div>Loading...</div>;
    }

    if (editMode) {
        return (
            <div>
                <h2>Edytuj Wyposażenie</h2>
                <label>
                    Nazwa:
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </label>
                <label>
                    Rodzaj Wyposażenia:
                    <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        {EquipmentTypes.map((option, index) => (
                            <option key={index} value={option.toLowerCase()}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Numer Seryjny:
                    <input
                        type="text"
                        value={formData.serialNumber}
                        onChange={(e) =>
                            setFormData({ ...formData, serialNumber: e.target.value })
                        }
                    />
                </label>
                <label>
                    Użytkownik:
                    <select
                        value={formData.userID}
                        onChange={(e) => setFormData({ ...formData, userID: e.target.value })}
                    >
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.lastName}
                            </option>
                        ))}
                    </select>
                </label>
                <button onClick={handleSave}>Zapisz</button>
                <button onClick={() => setEditMode(false)}>Anuluj</button>
            </div>
        );
    }

    return (
        <div>
            <h2>{equipment.name}</h2>
            <p>Rodzaj Wyposażenia: {equipment.type}</p>
            <p>Numer Seryjny: {equipment.serialNumber}</p>
            <p>
                Użytkownik: {equipment.user.firstName} {equipment.user.lastName}
            </p>
            <p>Email: {equipment.user.email}</p>
            <button onClick={handleEdit}>Edytuj</button>
            <button onClick={handleDelete}>Usuń</button>
        </div>
    );
};