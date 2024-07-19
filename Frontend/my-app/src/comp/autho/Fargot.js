// @flow strict

import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../img/logo.png';
import bg from '../img/newbg.jpg';


function Fargot() {
    return (


             
            <div className="container-fluid p-5   text-center bg-secondary bgimg "    style={{ 
                backgroundImage: `url("https://res.cloudinary.com/dqajgixvm/image/upload/v1673187047/test/bg_bcsmsj.jpg" )` 
              }}>
                
                <img className='rounded-circle' src={logo} width="250px" />
             
                <div className="text-center m-5-auto ">
            <h2  className= 'text-white'>Reset your password</h2>
            <h5  className= 'text-white'>Enter your email address and we will send you a new password</h5>
            <form action="/CustomerLogin">
                <h4 >
                    <label id="reset_pass_lbl"><h5> Email address </h5></label><br/>
                    <input type="email" name="email" required />
                </h4>
                <p>
                    <button id="sub_btn" type="submit">Send Password reset email</button>
                </p>
            </form>
            <footer>
                <h6 className='text-white'>First time? <Link to="/CustomerSignup"className='text-white'>Create an account</Link>.</h6>
                <h6><Link to="/"className='text-white'>Back to Homepage</Link>.</h6>
            </footer>
        </div>
                </div>
           

    );
};



export default Fargot;