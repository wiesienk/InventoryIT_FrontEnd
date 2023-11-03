import React, {useEffect, useState} from 'react';
import {Btn} from "../../../common/Btn";
import {AllUsersResponse} from "types"



export const Users = () => {


    const [allUsers, setAllUsers] = useState<AllUsersResponse[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/user`)
            const data = await res.json()
            setAllUsers(data)
        })()
    }, [])

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
                {
                    allUsers.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td><Btn text="ℹ️" to={`/users/${item.id}`}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    )
}