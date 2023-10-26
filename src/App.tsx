import React from 'react';
import {Header} from "./components/layouts/Header/Header";
import {Equipment} from "./components/layouts/pages/Equipment/Equipment";
import {Users} from "./components/layouts/pages/Users/Users";



export const App = () => {
   return (
       <>
           <Header/>
           <Equipment/>
           <Users/>
      </>
   )
}





