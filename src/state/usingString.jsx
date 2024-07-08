import React, { useState } from 'react'

const UsingString = () => {
  const [name, setName] = useState('')
  const getNamee = () => {
    const data = document.getElementById('givenname').value;
    setName(data);
  }
  return (
    <div>
      <label>Name:</label>
      <input type='name' id='givenname' required />
      <br /><br />
      <button onClick={getNamee}>submit</button>
      <p>Welcome, <strong>{name}</strong></p>
    </div>
  )
}
export default UsingString
