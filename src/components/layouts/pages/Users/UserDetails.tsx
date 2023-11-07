import React, { useEffect, useState } from 'react';
import { OneUserResponse } from "types";
import { useParams } from "react-router-dom";

export const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<OneUserResponse | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState<OneUserResponse>({ id: '', firstName: '', lastName: '', email: '' });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);


    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3001/user/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    setEditedUser(data);
                } else {
                    throw new Error('Unable to fetch user details');
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editedUser) {
            setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
        }
    };

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`http://localhost:3001/user/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedUser),
            });
            if (response.ok) {
                setSuccessMessage('Zapisano zmiany');
                setUser(editedUser);
                setIsEditing(false);
            } else {
                throw new Error('Unable to save changes');
            }
        } catch (error) {
            console.log(error);
        }
    };


    const handleDelete = async () => {
        const confirmDelete = window.confirm('Czy na pewno usunąć sprzęt?');
        if (confirmDelete) {
            try {
                await fetch(`http://localhost:3001/user/${id}`, {
                    method: 'DELETE',
                });
                setUser({id: '', firstName: '', lastName: '', email: ''})
                setSuccessMessage('Usunięto użytkownika')

            } catch (error) {
                console.error('Error deleting equipment', error);
            }}

    };

    if (!user) {
        return <div>Wczytywanie danych użytkownika ....</div>;
    }

    return (
        <div className='editForm'>
            <h2>Szczegóły Użytkownika</h2>
            {isEditing ? (
                <>
                    <p>ID: {user.id}</p>
                    <div>
                        <label>
                            First Name:
                            <input
                                required={true}
                                type="text"
                                name="firstName"
                                value={editedUser.firstName}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Last Name:
                            <input
                                required={true}
                                type="text"
                                name="lastName"
                                value={editedUser.lastName}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                required={true}
                                type="text"
                                name="email"
                                value={editedUser.email}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <button className='btn' onClick={handleSaveChanges}>Zapisz zmiany</button>
                    <button className='btn' onClick={() => setIsEditing(false)}>Anuluj</button>
                </>
            ) : (
                <>
                    <p>ID: {user.id}</p>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <button className='btn' onClick={() => setIsEditing(true)}>Edytuj</button>
                    <button className='btn' onClick={handleDelete}>Usuń użytkownika</button>
                </>
            )}
            {successMessage && <div>{successMessage}</div>}
        </div>
    )
}