import React,{cloneElement, Component, ReactElement} from "react";
import ReacTDOM from "react-dom";

import "./index.css"
type Props={
    children:ReactElement[]
};

type State ={
    activeSlide: number
}
class SlideShow extends React.Component <Props, State>{
    state={
        activeSlide:0
    };

    previous=()=>{
     this.setState( state=>{
       return{
          activeSlide:Math.max(state.activeSlide-1,0)
       };
     });
    }
    next=()=>{
        this.setState( state=>{
            return{
               activeSlide:Math.min(state.activeSlide+1,this.props.children.length-1)
            };
          });
    }
    render () {
        const {activeSlide}=this.state;
        const {children}=this.props;
        return (
            <>
            <div style={{ float:'right'}}>
               <button onClick={this.previous}>Prev</button>
               <button onClick={this.next}>Next</button>
            </div>

            {
            cloneElement( 
                children[activeSlide],
                {
                    page:{
                        current:activeSlide+1,
                        total:children.length
                    }
                }
            )
             
            }
            </>
        );
    }
}

export default SlideShow;