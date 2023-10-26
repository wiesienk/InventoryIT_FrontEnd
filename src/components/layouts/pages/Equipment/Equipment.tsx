import React, {useState} from 'react';
import {Btn} from "../../../common/Btn";

export const Equipment = () => {

    interface Equipment{
        id: string;
        type: string;
        name: string;
        username: string;
    }

    const [equipments, setEquipments] = useState([
        {
            id: "223131",
            type: "Laptop",
            name: "Dell XPS 13",
            username: "user1"
        },
        {
            id: "2231sd31",
            type: "Smartphone",
            name: "iPhone 12",
            username: "user2"
        },
        {
            id: "ddddsa",
            type: "Tablet",
            name: "iPad Pro",
            username: "user3"
        }
    ])


    return(
        <>
            <Btn text="Dodaj nowy sprzęt"/>
            <table className="table">
                <thead>
                <tr>
                    <th className="table__header">LP</th>
                    <th className="table__header">Rodzaj</th>
                    <th className="table__header">Nazwa</th>
                    <th className="table__header">Użytkownik</th>
                </tr>
                </thead>
                <tbody>
                {equipments.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.type}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    )
}