import React from 'react';
import {Btn} from "../../common/Btn";

export const HeaderButtons = () => {
    return             <div className="header_buttons">
        <Btn text="Wyposażenie" to="/equipments"/>
        <Btn text="Użytkownicy" to="/users"/>
        <Btn text="Wyloguj" to="/logout"/>
    </div>
}