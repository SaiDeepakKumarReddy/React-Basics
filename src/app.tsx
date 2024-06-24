import React from "react";
import {Route} from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import Contact from "./Contact";
const App =()=>{
 return (
    <>
      <NavigationMenu/>
      <Home/>
      <Contact/>
    </>
 );
};
export default App;
