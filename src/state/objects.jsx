import React,{useState} from 'react'

const Objects = () => {
    const[details,setAge]=useState({name:'sai',age:23});
    const changeAge=()=>{
        const givenAge=document.getElementById('givenAge').value;
        const givenname=document.getElementById('givenName').value;
        setAge({name:givenname,age:givenAge});
    }
  return (
    <div>
        <label>Name :</label>
        <label id="name"><strong>{details.name}</strong></label>
        <br/>
        <label>Age :</label>
        <label id="age"><strong>{details.age}</strong></label>
        <br/>
        <input type="name" id="givenName" placeholder='Modify your name'required/>
        <br/>
        <input type="number" id="givenAge" placeholder='Modify your age'required/>
        <br/>
        <button onClick={changeAge}>Modify</button>
    </div>
  )
}
export default Objects
