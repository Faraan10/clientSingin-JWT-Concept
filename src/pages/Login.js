import React,{useState} from 'react'
import '../App.css';

function Login() {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function loginUser(event){
    event.preventDefault()
    const response= await fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

    if(data.user) {
      alert("Login Successfull")
      window.location.href= '/home'
    } else {
      alert("Please check your username and password")
    }
  }

  const handleClick=()=>{
    window.location.href='/'
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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
        <input type="submit" value="Login"/> 

      </form>

      <h3>Dont have an Acoount ?</h3>
      <button onClick={handleClick}>Register</button>
    </div>
  );
}

export default Login;
