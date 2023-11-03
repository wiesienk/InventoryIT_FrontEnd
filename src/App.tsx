import React from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Equipments} from "./components/layouts/pages/Equipment/Equipments";
import {Users} from "./components/layouts/pages/Users/Users";
import {Route, Routes} from "react-router-dom";
import {AddUser} from "./components/layouts/pages/Users/AddUser";
import {UserDetails} from "./components/layouts/pages/Users/UserDetails";
import {AddEquipment} from "./components/layouts/pages/Equipment/AddEquipment";
import {EquipmentDetails} from "./components/layouts/pages/Equipment/EquipmentDetails";



export const App = () => {
   return (
    <>
        <Header/>
        <Routes>
            <Route path="/equipments" element={<Equipments/>}/>
            <Route path="/equipments/add-equipment" element={<AddEquipment/>}/>
            <Route path="/equipments/:id" element={<EquipmentDetails/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/add-user" element={<AddUser/>}/>
            <Route path="/users/:id" element={<UserDetails/>}/>
        </Routes>
    </>
   )
}





