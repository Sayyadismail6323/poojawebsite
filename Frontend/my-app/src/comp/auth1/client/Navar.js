// @flow strict


import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';


function Navar() {
    const logoutUser = async () =>{
        localStorage.clear()
        window.location.href = "/";
        await axios.get('/user/logout')
    }

    return (<nav className='navbar sticky-top navbar-primary navbar-expand-sm bg-warning '> 
    <div className='container-fluid' >
        <img src={logo} alt="brand-logo" width={"50px"}  className=" bg-secondry " />
        <Link className='navbar-brand' to='/'><h4>Online Pooja Samagri</h4></Link>



        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#cnavbar'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end'  id='cnavbar'>
            <ul className='navbar-nav'>
            < li className='nav-item p-2 ' >
                <Link className='nav-link' to='/'><h4>Home</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/Pooja'><h4>Services</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/BookPriest'><h4>Book Priest</h4></Link>
            </li>
        
            < li className='nav-item p-2'>
                <Link className='nav-link ' to='/Ordrers'> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/Profile'><h4>Profile</h4></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' onClick={logoutUser} to='/'><h4>Logout</h4></Link>
            </li>
           
        </ul>

            </div>
       
    </div>
    </nav>
 
    );
};

export default Navar;