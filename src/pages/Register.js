import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css';

function Register() {

  const history= useNavigate()

  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function registerUser(event){
    event.preventDefault()
    const response= await fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()

    if(data.status === 'ok') {
      history('/login')
    }
  }

  const handleClick=()=>{
    window.location.href='/login'
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e)=> setName(e.target.value)} 
          type="text"
          placeholder="Enter the name"
          /><br/>
        <input
          value={email}
          onChange={(e)=> setEmail(e.target.value)} 
          type="email"
          placeholder="Enter email"/><br/>
        <input
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"/><br/>
        <input type="submit" value="Register"/> 

      </form>

      <h3>Already Have an Account ?</h3>
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
}

export default Register;
