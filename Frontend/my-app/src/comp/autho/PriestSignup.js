// @flow strict

import * as React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../img/logo.png'
import axios from 'axios';
// import background from '../autho/bg.jpg';
import bg from '../img/newbg.jpg';
// import client from '../auth1/client/Home';

function PriestSignup() {
   //const navigate = useNavigate();
   const [email, setEmail] = useState('')
   const [name,setname] = useState('')
   const [lastname,setlastname]= useState('')
   const [phone,setphone]= useState('')
   const [age,setage] = useState('')
   const [zip,setzip] = useState('')
   const [password,setPassword] = useState('')
   const handleSubmit = async e => {
       console.log(email)
       console.log(password)
       e.preventDefault()
       try{
           await localStorage.clear()
           const res = await  axios.post('/prist/register',{email,password,name,lastname,age,zip,phone})
            localStorage.setItem('firstLogin',true)
            localStorage.setItem('priestLogin',true)
            window.location.href ="/"

       }catch(err)
       {
           alert(err.response.data.msg)
       }
   
   }
    return (
        // @flow strict
        // <div style={{ backgroundImage: `url(${background})` }}>
        <div style={{ backgroundImage: `url(${bg})` }}>
        <div className='row-4'>
            <div className=" text-center ">
                <img className='rounded-circle' src={logo} width="250px" />
                <div className="text-center m-5-auto">
            <h2 className= 'text-white'>Priest Register </h2>
            <h4 className= 'text-white'>Create Your  Account</h4>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" required 
                    name="fname"
                    value={name}
                    onChange={(e)=>setname(e.target.value)}/>
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text"  required 
                    name="lname"
                    value={lastname}
                    onChange={(e)=>setlastname(e.target.value)}/>
                </p>
                
                <p>
                    <label>Email Address</label><br/>
                    <input type="email"  required 
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Phone Number</label><br/>
                    <input type="text"  required
                    name="phoneNumber"
                    value={phone}
                    onChange={(e)=>setphone(e.target.value)} />
                </p>
                
                <p>
                    <label>Enter Your Age</label><br/>
                    <input type="number"  required 
                    name="age"
                    value={age}
                    onChange={(e)=>setage(e.target.value)} />
                </p>
               
                <p>
                    <label>Pincode</label><br/>
                    <input type="number"  required 
                    name="zip"
                    value={zip}
                    onChange={(e)=>setzip(e.target.value)}
                    />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password"  required name="password" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </p>
              
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> 
                    <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a>
                    </span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                    
                </p>
              
            </form> 
            <footer>
                <p><Link to="/" className= 'text-white'><b>Back to Homepage</b></Link>.</p>
                <p className= 'text-white'> <b>Already Have an Account?</b> <Link to="/PriestLogin" className= 'text-white'><b>Log In </b></Link>.</p>
            </footer>
        </div>
        </div>
        </div>
        </div>
        
        


    );
};

export default PriestSignup;