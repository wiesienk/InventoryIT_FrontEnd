import React from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Equipment} from "./components/layouts/pages/Equipment/Equipment";
import {Users} from "./components/layouts/pages/Users/Users";
import {Route, Routes} from "react-router-dom";



export const App = () => {
   return (
    <>
        <Header/>
        <Routes>
            <Route path="/equipment" element={<Equipment/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    </>
   )
}





