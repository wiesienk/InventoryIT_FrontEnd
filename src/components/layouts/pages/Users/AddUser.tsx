import React, {useState} from 'react';
import {AddNewUser,AddUserResponse} from 'types'

export const AddUser = ()=> {
    const [formData, setFormData] = useState<AddNewUser>({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [savedUser, setSavedUser] = useState<AddUserResponse | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                setSavedUser(data)
                setFormData({
                    email: "",
                    lastName: "",
                    firstName:""
                })
            })
            .catch(error => {
                console.error('Błąd:', error);
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">Imię:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Nazwisko:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Zapisz</button>
            {savedUser && (
                <p>Zapisano użytkownika</p>
            )}
        </form>
    )
}