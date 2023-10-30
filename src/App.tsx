import React from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Equipments} from "./components/layouts/pages/Equipment/Equipments";
import {Users} from "./components/layouts/pages/Users/Users";
import {Route, Routes} from "react-router-dom";
import {AddUser} from "./components/layouts/pages/Users/Add-user";
import {UserDetails} from "./components/layouts/pages/Users/UserDetails";



export const App = () => {
   return (
    <>
        <Header/>
        <Routes>
            <Route path="/equipment" element={<Equipments/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/add-user" element={<AddUser/>}/>
            <Route path="/users/:id" element={<UserDetails/>}/>
        </Routes>
    </>
   )
}





