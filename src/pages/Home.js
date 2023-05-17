import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import jwt from 'jwt-decode'



function Home() {

    const history=useNavigate()


    useEffect(()=>{
        const token=localStorage.getItem('token')
        if (token){
            
        }
    }, [])

    const handleClick=()=>{
        window.location.href= '/login'

    }

  return (
    <div>
        <h1>From Home</h1>
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}
export default Home
