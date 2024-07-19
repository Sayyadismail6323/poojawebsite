import React from 'react'

import { GlobalState } from './Global'
import { useContext } from 'react'

export default function Profile() {
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
  const [add,setadd] = state.userAPI.add
  const [addr,setaddr] = state.userAPI.addr
  return (
    <div >
    <div className=' d-flex p-2 ' >
        <div className='row' style={{width:"500px"}}>
            <img src='https://img.freepik.com/premium-vector/cartoon-illustration-indian-priest-character-set_262129-271.jpg?w=2000'/>
        </div>
        <div className=' row'>
            <div className='bg-primary'>
                <h1 className=''>
                    Name : {name} {lastname}
                    <h1 className='text-center'>

                    </h1>
                </h1>
                <h2>Email : {email}
                    </h2>
                
                <h2>
                    Age : {age} Years  
                </h2>
                <h2>
                    Contact :{phone}
                </h2>
                <h2>
                    GST Number :{gst}
                </h2>
                <h2>
                    Bank Number :{bank}
                </h2>
                <h2>
                    IFSC Code :{ifsc}
                </h2>
                <h2>
                    Address :{addr}
                </h2>
                <h2>
                    Zip Code :{zip}
                </h2>
            </div>
           
        </div>
        
    </div>
    <div >
    </div>
    <button className='container-fluid bg-danger'>
       <a className='nav-link' href='/Edit'><h4> Edit                 </h4></a>

    </button>
    </div>

    )
}
