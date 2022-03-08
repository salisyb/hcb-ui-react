import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import '../Button.css'


function Login() {
  
  useEffect(() => {
    
  },[])
  return (
    <div className="container">
    <div className='register__wrapper'>
        <div className="register__container">
            <h1 className='register__title'>Welcome Back</h1>
            <form className='form__container'>
                <label >Username <input className="form__input" placeholder='Username' type='text' name='username' /></label>
                <label>Password<input className="form__input" placeholder='Password' type='password' name='password' /></label>
                <button type='submit' className='btn btn--full'>Sign In Now</button>
            </form>
            <p className='footer-title-text'>
            already have an account? <Link to="register">Register</Link>
            </p>
        </div>
        <div className="illustrion-wrapper">
        <img src='./images/art-illustration.svg'  className='register__illustration' />
        </div>
    </div>
    </div>
  )
}

export default Login