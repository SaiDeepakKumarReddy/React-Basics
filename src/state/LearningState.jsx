import React, { useState } from 'react'

const LearningState = () => {
    const [name, setName] = useState('sai')
    const [age, setAge] = useState(25)

    const changeName =()=>{
        setName('Sai Deepak Kumar Reddy Katherapalli')
        setAge(23)
    }
    return (
        <div>
            <label>click button to see the useState hook effect</label>
            <p>{name} is {age} years old</p>
            <button onClick={changeName}>click</button>
        </div>
    )
}
export default LearningState
