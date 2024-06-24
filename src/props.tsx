import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

type Props ={
    heading:string,
    page?:{
        current:number,
        total:number
    },
    children: ReactNode;

}

const PropElement= (props : Props) =>{
    const elem=(
    <div className="slide">
        <span>{props.page?.current}/{props.page?.total}</span>
        <h1>{props.heading}</h1>
        <hr/>
        <div>
            {props.children}
        </div>
    </div>
    );
    return elem;
};

export default PropElement;