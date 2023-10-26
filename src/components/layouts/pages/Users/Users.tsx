import React, {useState} from 'react';
import {Btn} from "../../../common/Btn";



export const Users = () => {



    const [allUsers, setAllUsers] = useState([
        {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com"
        },
        {
            id: "2",
            firstName: "Alice",
            lastName: "Smith",
            email: "alice.smith@example.com"
        },
        {
            id: "3",
            firstName: "Bob",
            lastName: "Johnson",
            email: "bob.johnson@example.com"
        }
    ])


    return(
        <>
            <Btn text="Dodaj nowego uzytkonika" to="add-user"/>
            <table className="table">
                <thead>
                <tr>
                    <th className="table__header">LP</th>
                    <th className="table__header">Imię</th>
                    <th className="table__header">Nazwisko</th>
                    <th className="table__header">Email</th>
                </tr>
                </thead>
                <tbody>
                {allUsers.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    )
}