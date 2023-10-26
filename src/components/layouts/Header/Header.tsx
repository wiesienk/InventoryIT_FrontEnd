import React from 'react';
import {Btn} from "../../common/Btn";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">Ewidencja sprzętu IT</h1>
            <div className="header__buttons">
                <Btn text="Wyposażenie"/>
                <Btn text="Użytkownicy"/>
                <Btn text="Wyloguj"/>
            </div>
        </header>
    )
}