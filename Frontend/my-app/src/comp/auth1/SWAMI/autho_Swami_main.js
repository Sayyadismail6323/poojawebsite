import React from 'react'

import Navar from './Navar'
import Profile from './Profile'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home'
import Pooja from './Pooja'
import Edit_swami from './Edit';
import {DataProvider} from './Global'

export default function Auth_Swami_main() {
  return (
<DataProvider>

<BrowserRouter>

<Navar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Pooja' element={<Pooja/>}/>
  <Route path='/Edit' element={<Edit_swami/>}/>

 
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='*' element={<h1>wrong  url addresss Page</h1>}/>




  
  </Routes></BrowserRouter> 


</DataProvider> )
}
