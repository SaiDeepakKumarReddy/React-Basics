import React,{MouseEvent} from "react";
import LoginForm from "./uncontrolledCompenents";
const action =(event: MouseEvent<HTMLButtonElement>)=>{
    console.log("Clicked on the Submit")
    console.log(event.target);
};
const elem =(
    <div>
        <div>
            <span>Button</span>
            <button type="submit" onClick={action}>Submit</button>
        </div>
        <br/>
        <div>
            <h4>Login Form</h4>
            <LoginForm/>
        </div>
    </div>
);

export default elem;