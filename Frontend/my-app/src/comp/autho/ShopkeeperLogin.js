// @flow strict

import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../img/logo.png';
import axios  from 'axios';
import { useState } from 'react';
import background from '../autho/bg.jpg';
import bg from '../img/newbg.jpg';
// import client from 'auth1/client/Home';
function ShopkeeperLogin() {
    //const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
  
  
  
    const handleSubmit = async e => {
        console.log(email)
        console.log(password)
        e.preventDefault()
        try{
          //  console.log("Start")
            await localStorage.clear()
            await  axios.post('/shopowner/login',{email,password})
     //       console.log("DOne")
            localStorage.setItem('firstLogin',true)
             localStorage.setItem('shopLogin',true)
            window.location.href ="/"

        }catch(err)
        {
            alert(err.response.data.msg)
        }
    
    }
    return (
        // <div style={{ backgroundImage: `url(${background})` }}>
        <div style={{ backgroundImage: `url(${bg})` }}>
       
       
        <div className='row-4 '>
            <div className=" text-center  p-5">
                <img className='rounded-circle' src={logo}  width="250px" />
        <div className="text-center m-5-auto">
        <h2 className= 'text-white'>Shopkeeper SignIn</h2>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Email address</label><br/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" required />
            </p>
            <p>
                <label>Password</label>
                <Link to="/forgot"><label className="right-label ">Forget password?</label></Link>
                <br/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" required />
            </p>
            <p>
                <button id="sub_btn" type="submit">Login</button>
            </p>
        </form>
        <footer>
            <h6 className= 'text-white'>First time? <Link to="/ShopkeeperSignup"className= 'text-white'>Create an account</Link>.</h6>
            <h6><Link to="/"className= 'text-white'>Back to Homepage</Link>.</h6>
        </footer>
    </div>
    </div>
    </div>
    </div>
    
)
}


export default ShopkeeperLogin;