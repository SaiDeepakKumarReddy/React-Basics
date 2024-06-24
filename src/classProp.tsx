import React,{Component, ReactNode} from "react";
import ReactDOM from "react-dom";

type Props ={
    heading:string,
    page?:{
        current:number,
        total:number
    },
    children: ReactNode;

}

class Slide extends React.Component <Props>{
    render(){
        const {heading,page, children} =this.props;

        const elem1=(
            <div className="slide">
                <span>{page?.current}/{page?.total}</span>
                <h1>{heading}</h1>
                <hr/>
                <div>
                    {children}
                </div>
            </div>
            );
            return elem1;
    }
}
export default Slide;