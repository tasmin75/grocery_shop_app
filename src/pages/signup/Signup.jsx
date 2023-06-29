import React, { useState } from 'react';
import style from './Signup.module.css'
import { Link } from 'react-router-dom';


const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword: ""
  })
  const [user, setUser] = useState([])

  const UserInputVal =(e) => {
    setInputValue({...inputValue,[e.target.name]:e.target.value})
  }

  const handleSubmitData = (e) => {
    e.preventDefault()
   
  }
 
  return (
    <div className={style.container}>
    <div className={style.left}></div>


    <div className={style.right}>

     <form onSubmit={handleSubmitData}>
     <input 
      type="text"  onChange={UserInputVal}
      name='username'
      placeholder="Enter Name..." />

      <input 
      type="text" onChange={UserInputVal}
      name='email'
       placeholder="Enter Email..." />
      <input 
      type="password" onChange={UserInputVal}
      name='password'
       placeholder="Enter Password..." />
      <input 
      type="text" onChange={UserInputVal}
      name='confirmPassword'
      placeholder="Enter Confirm Password..." />
      <button type='submit'>Signup</button>
     </form>
    </div>
    <p>
      Already have account? <Link to="./login">Login</Link>{" "}
    </p>
  </div>
  )
}

export default Signup