import React, { useEffect } from 'react'
import './Register.css'
import Button from '../Button'
import '../Button.css'
import { Link } from 'react-router-dom'

function Register() {
  

  return (
    <div className="container">
    <div className='register__wrapper'>
        <div className="register__container">
            <h1 className='register__title'>Register To Start</h1>
            <form className='form__container'>
                <label >Username <input className="form__input" placeholder='Username' type='text' name='username' /></label>
                <label>Email Address<input className="form__input" placeholder='Email' type='email' name='email' /></label>
                <label>Password<input className="form__input" placeholder='Password' type='password' name='password' /></label>
                <label>Re-type Password<input className="form__input" placeholder='Re-type Password' type='password' name='password' /></label>
                <p className='term-text'>by Clicking register you agree to the term and conditions</p>
                <button type='submit' className='btn btn--full'>Register Now</button>
            </form>
            <p className='footer-title-text'>
            already have an account? <Link to="/login">Log In</Link>
            </p>
        </div>
        <div className="illustration__wrapper">
        <img src='./images/art-illustration.svg'  className='register__illustration' />
        </div>
    </div>
    </div>
  )
}

export default Register