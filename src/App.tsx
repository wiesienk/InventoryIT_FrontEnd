import React, {useState, useContext, createContext} from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Equipments} from "./components/layouts/pages/Equipment/Equipments";
import {Users} from "./components/layouts/pages/Users/Users";
import {Route, Routes} from "react-router-dom";
import {AddUser} from "./components/layouts/pages/Users/AddUser";
import {UserDetails} from "./components/layouts/pages/Users/UserDetails";
import {AddEquipment} from "./components/layouts/pages/Equipment/AddEquipment";
import {EquipmentDetails} from "./components/layouts/pages/Equipment/EquipmentDetails";
import {LoginForm} from "./components/layouts/LoginForm/LoginForm";
import {HeaderButtons} from "./components/layouts/Header/HeaderButtons";
import {Logout} from "./components/layouts/Logout/Logout";
import "./App.css"



export const App = () => {



    const [isLoggedIn, setLoggedIn] = useState(false);



    const handleStateLogin = () => {
        setLoggedIn(true);
    };
    const handleStateLogout = () => {
        setLoggedIn(false);
    };


    if (!isLoggedIn) {
        return <>
            <Header></Header>
            <LoginForm onLogin={handleStateLogin}/>
        </>

    }

    return (<>
            <Header/>
            <HeaderButtons/>
            <Routes>
                <Route path="/equipments" element={<Equipments/>}/>
                <Route path="/equipments/add-equipment" element={<AddEquipment/>}/>
                <Route path="/equipments/:id" element={<EquipmentDetails/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/add-user" element={<AddUser/>}/>
                <Route path="/users/:id" element={<UserDetails/>}/>
                <Route path="/logout" element={<Logout onLogout={handleStateLogout}/>}/>
            </Routes>
    </>

    )
}





