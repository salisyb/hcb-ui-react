import React, { useEffect, useState } from "react";
import "./Register.css";
import Button from "../Button";
import "../Button.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/ClipLoader";
import { BeatLoader, SyncLoader } from "react-spinners";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Register() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(false);
  const [emailVerification, setEmailVerification] = useState(true)
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");



  // Error Data
  const [email_error, setEmailError] = useState(false)
  const [first_name_error, setFirstNameError]= useState(false)
  const [last_name_error, setLastNameError] = useState(false)
  const [phone_error, setPhoneError] = useState(false)
  const [password_error, setPasswordError] = useState(false)


  const handleRegister = (event) => {
    event.preventDefault();
    setRegister(true)
    if(!inputValidation()) {
      setRegister(false)
      return;
    }
    dispatch(
      registerUser({
        username: email,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number,
        password: password,
      }, statusResult)
    );
  };

  const handleFormInput = (name, value) => {
    const pattern = /[a-zA-Z0-9]+@[a-z]+\.[a-z]{1,4}/g
    if(name === 'email') {
      if(!value.match(pattern)) {
        setEmailError(true)
      }
      else {
        setEmailError(false)
      }
      setEmail(value)
      
    }
    
    if(name === 'first_name') {
      if(value.length < 3 ) {
        setFirstNameError(true)
      } else {
        setFirstNameError(false)
      }
      setFirstName(value)
    }

    if(name === 'last_name') {
      if(value.length < 3 ) {
        setLastNameError(true)
      } else {
        setLastNameError(false)
      }
      setLastName(value)
    }

    if(name === 'phone') {
      if(Number(value) || value === '' || value == 0) {
        setPhoneNumber(value)
      }
    }

    if(name === 'password') {
      if(value.length < 5 ) {
        setPasswordError(true)
      }
      else {
        setPasswordError(false)
      }
      setPassword(value)
    }
  }

  const inputValidation = () => {
    if(email_error || first_name_error || last_name_error || phone_error || password_error) {
      alert('there is an error in your form please check and try again')
      return false
    }
    return true
  }
  const statusResult = () => {
    history.push('/')
    
  }


  const EmailVerification = () => {
    return(
      <>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <h1 style={{fontSize: '28px'}}>Verify Your Email Address</h1>
              <p style={{marginTop: '10px', textAlign: 'center'}}>We have sent a verification code to your email address please check and verify</p>
        <div className="register_input_wrapper" style={ phone_error ? {borderWidth: '3', borderStyle: "solid", borderColor: 'red'} : {}}>
              <div>
                <input type={'tel'} name='code' className="register_input" style={{textAlign: 'centerw'}} />
              </div>
              {/* <i class="fa-solid fa-phone-flip register-email-icon"></i> */}
            </div>
            <button type="submit" value={'submit'} className="register_submit_button" onClick={(e) => handleRegister(e)}>{register ? <SyncLoader color={'white'} loading={true} css={override} size={15} /> : 'Verify Email' }</button>
        </div>
      </>
    )
  }

  return (
    <>

    <div className="register_container">
        <div className="register_wrapper">
          <>

          {/* Form Container  */}
          <div className="register_left_form">
          {emailVerification ? <EmailVerification /> :
          <>
            <i className="fa-solid fa-arrow-left register-arrow" onClick={() => history.push('/')}></i>
            <h1 className="register_header_title">Create Account<span style={{color: '#006C67'}}>.</span></h1>
            <p className="register_login_link">Already A Member? <Link to='/login' style={{fontSize: '20px', fontWeight: 'bold'}}>Login.</Link></p>
            <form>
            {/* Email Container */}
            <div className="register_input_wrapper" style={ email_error ? {borderWidth: '3', borderStyle: "solid", borderColor: 'red'} : {}}>
              <div>
                <p className="register_input_details">
                  Email
                </p>
                <input type={'email'} value={email} name='email' className="register_input"  onChange={(e) => handleFormInput(e.target.name, e.target.value)} />
              </div>
              <i class="fa-solid fa-envelope register-email-icon"></i>
            </div>
          

            {/* Firstname Lastname Container */}
            <div className="register_name_wrapper" >
              {/* First Name */}
            <div className="register_input_wrapper register_firstname" style={ first_name_error ? {borderWidth: '3', borderStyle: "solid", borderColor: 'red'} : {}}>
              <div>
                <p className="register_input_details">
                  First Name
                </p>
                <input type={'text'} value={first_name} name='first_name' className="register_input" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
              </div>
              <i class="fa-solid fa-envelope register-email-icon"></i>
            </div>
            {/* Last Name */ }
            <div className="register_input_wrapper register_lastname" style={ last_name_error ? {borderWidth: '3', borderStyle: "solid", borderColor: 'red'} : {}}>
                <div>
                  <p className="register_input_details">
                    Last Name
                  </p>
                  <input type={'text'} value={last_name} name='last_name' className="register_input" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
                </div>
                <i class="fa-solid fa-envelope register-email-icon"></i>
              </div>
            </div>
               {/* Phone Container */}
              <div className="register_input_wrapper" style={ phone_error ? {borderWidth: '3', borderStyle: "solid", borderColor: 'red'} : {}}>
              <div>
                <p className="register_input_details">
                  Phone Number
                </p>
                <input type={'tel'} value={phone_number} name='phone' className="register_input" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
              </div>
              <i class="fa-solid fa-phone-flip register-email-icon"></i>
            </div>
             {/* Password Container */}
             <div className="register_input_wrapper" style={ password_error ? {borderWidth: '3', borderStyle: "solid", borderColor: 'red'} : {}}>
              <div>
                <p className="register_input_details">
                  Password
                </p>
                <input type={showPassword ? 'text' : 'password'} value={password} name='password' className="register_input" onChange={(e) => handleFormInput(e.target.name, e.target.value)}/>
              </div>
              {showPassword ? <i class="fa-solid fa-eye register-password-icon" style={{color: '#006c67'}} onClick={() => setShowPassword(!showPassword)}></i> : <i class="fa-solid fa-eye-slash register-password-icon" onClick={() => setShowPassword(!showPassword)}></i> }
            </div>
            <button type="submit" value={'submit'} className="register_submit_button" onClick={(e) => handleRegister(e)}>{register ? <SyncLoader color={'white'} loading={true} css={override} size={15} /> : 'Create Account' }</button>
            <p style={{marginTop: '7px',}}>By Clicking Submit you agree to the term of services</p>
          </form>
          </> }
          </div>
          </>

          {/* Image Container  */}
          <div className="register_right_image">
            <img className="register_logo_icon" src="./images/logo.png" alt="khcb-logo" />
          </div>
        </div>
    </div> 
    </>
   
  );
}

export default Register;
