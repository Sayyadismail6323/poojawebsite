import React,{useState,useContext} from 'react'
import { GlobalState } from '../../Global'
import Navar_log from './Navar_log'
import Navar from './Navar'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    if(isLogged)
    {
           return(  <Navar_log/>)
    }
    else{
    return (
      <div><Navar/></div>
   
  )
    }
}
