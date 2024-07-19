// @flow strict


import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';


function Navar() {
    return (<nav className='navbar sticky-top navbar-primary navbar-expand-sm bg-warning '> 
    <div className='container-fluid ' >
        <img src={logo} alt="brand-logo" width={"60px"}  className=" bg-secondry " />
        <Link className='navbar-brand' to='/'><b>Online Pooja Samagri</b></Link>

        <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#cnavbar'>
            <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end'  id='cnavbar'>
            <ul className='navbar-nav'>
            < li className='nav-item p-2 ' >
                <Link className='nav-link' to='/'><b>Home</b></Link>
            </li>
            < li className='nav-item p-2 ' >
                <Link className='nav-link' to='/item'><b>Item</b></Link>
            </li>
            < li className='nav-item p-2 ' >
                <Link className='nav-link' to='/Services'><b>Services</b></Link>
            </li>
            <li className='nav-item p-2'>
                <Link className='nav-link' to='/about'><b>About</b></Link>
            </li>
            <li className="nav-item dropdown p-2 ">
            <a
                className="nav-link dropdown-toggle nav-txt "
                data-bs-toggle="dropdown"
                href="#"
                role="button" aria-haspopup="true" aria-expanded="false">
                <b>Log In  </b>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                <Link to="/CustomerLogin" className="dropdown-item"><b>Customer</b></Link>
                </li>
                <li>
                  <Link to="/ShopkeeperLogin" className="dropdown-item"><b>Shopkeeper</b></Link>
                </li>
                <li>
                  <Link to="/PriestLogin" className="dropdown-item"><b>Priest</b></Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown p-2">
            <a
                class="nav-link dropdown-toggle nav-txt"
                data-bs-toggle="dropdown"
                href="#"
                role="button" aria-haspopup="true" aria-expanded="false">
               <b> Sign Up </b>
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
              <Link to="/CustomerSignup" className="dropdown-item"><b>Customer</b></Link>
                </li>
                <li>
                  <Link to="/ShopkeeperSignup" className="dropdown-item"><b>Shopkeeper</b></Link>
                </li>
                <li>
                  <Link to="/PriestSignup" className="dropdown-item"><b>Priest</b></Link>
                </li>
              </ul>
            </li>
            
        </ul>

            </div>
       
    </div>
    </nav>
 
    );
};

export default Navar;