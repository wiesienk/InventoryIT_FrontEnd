import React from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Equipments} from "./components/layouts/pages/Equipment/Equipments";
import {Users} from "./components/layouts/pages/Users/Users";
import {Route, Routes} from "react-router-dom";



export const App = () => {
   return (
    <>
        <Header/>
        <Routes>
            <Route path="/equipment" element={<Equipments/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    </>
   )
}





