import React from 'react';
import {Btn} from "../../common/Btn";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header_title">InventoryIT</h1>
            <div className="header_buttons">
                <Btn text="Wyposażenie" to="/equipment"/>
                <Btn text="Użytkownicy" to="/users"/>
                <Btn text="Wyloguj" to="/logout"/>
            </div>
        </header>
    )
}