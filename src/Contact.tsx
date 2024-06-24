import React from "react";
import { NavLink } from "react-router-dom";
import "./app.css";
import email from "./Email";
const Contact =()=>{
    return(
        <>
        <div>
            <h1>Contact</h1>
            <hr/>
            <address>
                5090 N Primtivo Way, Fresno, California-93710
            </address>
        </div>

        <div className="navigation-links">
            <NavLink to="/Email" >Email</NavLink>
            <NavLink to="/phone" >Phone</NavLink>
        </div>
        </>
    );
}
export default Contact;