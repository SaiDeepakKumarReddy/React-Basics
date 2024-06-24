import React, {Component,ChangeEvent, FormEvent} from "react";


class LoginForm extends React.Component {
    doChange (event:ChangeEvent<HTMLInputElement>){
     console.log("Upadating....")
     console.log(event.target.name)
    }
    submittingForm = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
     console.log("Logins Submitted")
    }

    render(){
        return(
            <form onSubmit={this.submittingForm}>
            <div>
            <label >Email :</label>
            <input type="email"  id="email" name="email" onChange={this.doChange}/>
            </div>

            <div>
            <label >Password :</label>
            <input type="password"  id="password" name="password" onChange={this.doChange}/>
            </div>

            <button type="submit">Login</button>
            </form>
        );
    }
}
export default LoginForm;