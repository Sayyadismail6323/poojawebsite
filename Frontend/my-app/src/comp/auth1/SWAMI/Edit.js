// @flow strict
import * as React from 'react';
import { GlobalState } from './Global'
import { useContext } from 'react'
import axios from 'axios';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../img/logo.png'


export default Edit_swami;

function Edit_swami() {
    const state = useContext(GlobalState)
    const [name,setname] = state.userAPI.name
    const [phone,setphone] = state.userAPI.phone
  const [token] = state.token
  const [email,setemail]= state.userAPI.email
  const [zip,setzip] =state.userAPI.zip
  const [lastname,setlastname] = state.userAPI.lastname
  const [age,setage] = state.userAPI.age
  const [ gst,setgst] = state.userAPI.gst
  const [bank ,setbank] = state.userAPI.bank
  const [ifsc,setifsc] = state.userAPI.ifsc
//   const [add] = state.userAPI.add
  const [add,setadd] = state.userAPI.add
  const [addr,setaddr] = state.userAPI.addr
  const handleSubmit = async e => {
    console.log(name)

    e.preventDefault()
    try{
      console.log("err")
        await axios.patch('/prist/redata',{name,lastname,age,phone,gst,bank,ifsc,addr,zip},{   headers: {Authorization: token}});
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
                             <input for="name" placeholder='Enter Name' type="text" className='form-control' id='Name' value={name} onChange={(e) =>setname(e.target.value)} />
                        </div>
                        <div className=' col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="lastname" placeholder='Enter Lastname' type="text" className='form-control' id='lastname' value={lastname} onChange={(e) =>setlastname(e.target.value)} />
                        </div>
                        <div className="col-md-2"/>


                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4  mb-3 mt-3'>
                            <input for="age" placeholder='enter your age' type="number" value={age} onChange={(e) =>setage(e.target.value)} className='form-control' id='age' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="Phone Number" placeholder='enter Phone Number' type="text" value={phone} onChange={(e) =>setphone(e.target.value)} className='form-control' id='phone' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input  placeholder='GST Number ' value={gst} onChange={(e) =>setgst(e.target.value)} type="text" className='form-control' id='email' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='  Bank Number' type="text" value={bank} onChange={(e) =>setbank(e.target.value)} className='form-control' id='bank' />
</div>
<div className="col-md-2"/>

<div className="col-md-2"/>

<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='  IFSC Code' value={ifsc} onChange={(e) =>setifsc(e.target.value)} type="text" className='form-control' id='ifc' />
</div>
<div className="col-md-2"/>
<div className="col-md-2"/>
<div className='col-sm-12 col-md-4 mb-3 mt-3'>
    <input  placeholder='Address  ' value={addr} onChange={(e) =>setaddr(e.target.value)} type="text" className='form-control' id='addr' />
    </div>

<div className='col-sm-12 col-md-4 mb-3 mt-3'>
    <input  placeholder='Pin Code  ' value={zip} onChange={(e) =>setzip(e.target.value)} type="text" className='form-control' id='add' />
    
</div>

<div className="col-md-2"/>
    <button  className='container col-sm-12 col-md-6 mb-3 mt-3 bg-success' >
                                Save

                            </button>

                    </form>
                    <p >
                        <Link className='text-white' to={'/Profile'} >No need</Link>
                    </p>
                    <p></p>
                </div>
            </div>

    );
};

