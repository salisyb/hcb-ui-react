import React, { useEffect, useState } from "react";
import "./Login.css";
import "../Button.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/ClipLoader";
import { SyncLoader } from "react-spinners";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Login() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [login, setLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    setLogin(!login)
    event.preventDefault();
    if(!validateInput()) {
      return;
    }
    dispatch(
      loginUser({
        username,
        password,
      }, statusResult)
    );
  };
  const validateInput = () => {
    if(username.length < 3 || password.length < 3 ) {
      return false;
    }
    return true
  }
  const statusResult = () => {
    setLogin(false)
    history.push('/')
    
  }

  return (
    <div className="login_container">
        <div className="login_wrapper">
          {/* Form Container  */}
          <div className="login_left_form">
            <i className="fa-solid fa-arrow-left login-arrow" onClick={() => history.push('/')}></i>
            <h1 className="login_header_title">Welcome Back<span style={{color: '#006C67'}}>.</span></h1>
            <p className="login_login_link">Don't Have Account? <Link to='/register' style={{fontSize: '20px', fontWeight: 'bold'}}>Register.</Link></p>
            {/* Email Container */}
            <div className="login_input_wrapper">
              <div>
                <p className="login_input_details">
                  Email
                </p>
                <input type={'email'} value={username} name='email' className="login_input" onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <i class="fa-solid fa-envelope login-email-icon"></i>
            </div>

            
             {/* Password Container */}
             <div className="login_input_wrapper">
              <div>
                <p className="login_input_details">
                  Password
                </p>
                <input type={showPassword ? 'text' : 'password'} value={password} name='password' className="login_input" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <i class="fa-solid fa-key login-password-icon" ></i> 
            </div>
            <Link to="/password-reset" className="login_forgot_password">Forgot your Password?</Link>
            <button type="submit" className="login_submit_button" onClick={(e) => handleLogin(e)}> {login ? <SyncLoader color={'white'} loading={true} css={override} size={15} /> : 'Login' }</button>
            {/* <p style={{marginTop: '7px',}}>By Clicking Submit you agree to the term of services</p> */}
          </div>

          {/* Image Container  */}
          <div className="login_right_image">
            <img className="login_logo_icon" src="./images/logo.png" alt="khcb-logo" />
          </div>
        </div>
    </div>
   
  );
}

export default Login;
