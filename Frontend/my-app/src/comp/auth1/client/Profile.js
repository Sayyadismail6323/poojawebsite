import React from 'react'
import { Link } from 'react-router-dom'
import Edit_client from './Edit'
import { GlobalState } from './Global'
import { useContext } from 'react'

export default function Profile() {
    
    const state = useContext(GlobalState)
    const [name,setname] = state.userAPI.name
    const [phone,setphone] = state.userAPI.phone
  const [token] = state.token
  const [email,setemail]= state.userAPI.email
  const [zip] =state.userAPI.zip
  const [lastname,setlastname] = state.userAPI.lastname
  const [age,setage] = state.userAPI.age
  const [add,setadd] = state.userAPI.add
  return (
    
    <div >
    <div className=' d-flex p-2 ' >
        <div className='row' style={{width:"300px"}}>
            <img src='https://res.cloudinary.com/dqajgixvm/image/upload/v1673184143/test/piyush_ilkoxl.jpg'/>
        </div>
        <div className=' row'>
            <div className='bg-primary'>
                <h1 className=''>
                    Name : {name} {lastname}
                    <h1 className='text-center'>

                    </h1>
                </h1>
                <h2>
                    Email Id : {email}  
                </h2>
                <h2>
                    Age : {age}Years  
                </h2>
                <h2>
                    Contact :{phone}
                </h2>
                <h2>
                    Address: {add}
                </h2>
            </div>
           
        </div>
        
    </div>
    
    <div >
    </div>

    <button className='container-fluid bg-danger'>
    <Link className='nav-link' to='/Edit'><h4>Edit</h4></Link>
    </button>
    <button className='container-fluid bg-secondary'>
    <Link className='nav-link' to='/Location'><h4>Add current Location</h4></Link>
    </button>
    </div>
    

    )
}
