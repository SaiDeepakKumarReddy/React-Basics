import React, { useState } from 'react'

const Arrays = () => {
    const [city, setCity] = useState([' ']);

    const addCities = () => {
        const givenIp=document.getElementById('citygiven').value;
        setCity([...city," "+givenIp])
    }
    return (
        <div>
            <input type="name" id="citygiven" required />
            <button onClick={addCities}>Add</button>
            <p>{city}</p>
        </div>
    )
}
export default Arrays
