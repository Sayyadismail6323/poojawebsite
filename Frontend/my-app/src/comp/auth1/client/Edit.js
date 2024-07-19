// @flow strict
import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../img/logo.png'
import { useState,useContext } from 'react';

import axios  from 'axios';
import { GlobalState } from './Global';
export default Edit_client;

function Edit_client() {
    const state = useContext(GlobalState)
    const [name,setname] = state.userAPI.name
    const [phone,setphone] = state.userAPI.phone
  const [token] = state.token
  const [email,setemail]= state.userAPI.email
  const [zip,setzip] =state.userAPI.zip
  const [lastname,setlastname] = state.userAPI.lastname
  const [age,setage] = state.userAPI.age
  const [add,setadd] = state.userAPI.add

    const handleSubmit = async e => {
        console.log(name)

        e.preventDefault()
        try{
          console.log("err")
            await axios.patch('/customer/redata',{name,lastname,age,phone,add},{   headers: {Authorization: token}});
            window.location.href ="/"
            window.location.href ="/"


        }catch(err)
        {
            //alert(err.response.data.msg)
            alert(err)
            window.location.href ="/"

        }
    
    }
    return (
        // @flow strict

            <div className="container-fluid p-5  text-white text-center bg-primary bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>
                <form className='row text-center align-center' onSubmit={handleSubmit} >
                    <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4 mb-3 mt-3 '>
                             <input for="name" placeholder='Enter First Name' type="text" className='form-control' id='Name'
                             value={name} onChange={(e) =>setname(e.target.value)}  />
                        </div>
                        <div className=' col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="lastname" value={lastname} onChange={(e) =>setlastname(e.target.value)} placeholder='Enter Lastname' type="text" className='form-control' id='lastname' />
                        </div>
                        <div className="col-md-2"/>


                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4  mb-3 mt-3'>
                            <input for="age" placeholder='Enter your age'  value={age} onChange={(e) =>setage(e.target.value)} type="number" className='form-control' id='age' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="Phone Number" placeholder='Enter Phone Number' value={phone} onChange={(e) =>setphone(e.target.value)}   type="text" className='form-control' id='phone' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input  placeholder='Enter Your Email  ' value={email} onChange={(e) =>setemail(e.target.value)}     type="text" className='form-control' id='email' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="address 2. ..." type="address 2. ..."  value={add} onChange={(e) =>setadd(e.target.value)} placeholder='Address 1' className='form-control' id='address 2. ...' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="address 3. ..." type="address 3. ..." value={zip} onChange={(e) =>setzip(e.target.value)} placeholder='Address 2' className='form-control' id='address 3. ...' />
                        </div>
                        <div className="col-md-2"/>
                            <Link className="text-white" to={'/Profile'} >
                            <button  className='container col-sm-12 col-md-6 mb-3 mt-3 bg-success btn btn-outline-warning' >
                                Save

                            </button>
                            </Link>
                    </form>
                    <h5 >
                        <Link className='text-white' to={'/Profile'} >No need</Link>
                    </h5>
                    <p></p>
                </div>
            </div>


    );
};

