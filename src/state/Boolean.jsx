import React,{useState} from 'react'

const Boolean = () => {
    const [click, SetClick]=useState(false);
    const changeState=()=>{
        SetClick(!click)
    }
  return (
    <div>
        <p>Implementing the Boolean State Hook</p>
        <button onClick={changeState}>{click? "Clicked": "Not clicked"}</button>
    </div>
  )
}
export default Boolean
