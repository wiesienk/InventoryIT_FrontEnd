import React, {useEffect, useState} from 'react';
import { AllEquipmentResponse } from 'types';
import {Btn} from "../../../common/Btn";

export const Equipments = () => {


    const [equipments, setEquipments] = useState<AllEquipmentResponse[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/equipment`)
            const data = await res.json()
            setEquipments(data)
        })()
    }, [])

    return(
        <>
            <Btn text="Dodaj nowy sprzęt" to="add-equipment"/>
            <table className="table">
                <thead>
                <tr>
                    <th className="table__header">LP</th>
                    <th className="table__header">Rodzaj</th>
                    <th className="table__header">Nazwa</th>
                    <th className="table__header">Numer Seryjny</th>
                    <th className="table__header">Użytkownik</th>
                </tr>
                </thead>
                <tbody>
                {equipments.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.type}</td>
                        <td>{item.name}</td>
                        <td>{item.serialNumber}</td>
                        <td>{item.userLastName}</td>
                        <td><Btn text="ℹ️" to={`/equipments/${item.id}`}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>

    )
}