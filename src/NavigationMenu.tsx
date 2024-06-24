import React from "react";
import { NavLink } from "react-router-dom";
import "./app.css";
const NavigationMenu=()=>{
    return (
        <div className="navigation-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
    );  
};
export default NavigationMenu;

