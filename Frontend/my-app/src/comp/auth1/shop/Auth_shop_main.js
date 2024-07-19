import React from 'react'

import Navar from './Navar'
import Profile from './Profile'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home'
import Pooja from './Add_item';
import Ordrers from './Ordrers';
import Edit_shop from './Edit';
import Add_item from './Add_item';
import {DataProvider} from './Global'

export default function Auth_shop_main() {
  return (
<DataProvider>
<BrowserRouter>
<Navar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Add_item' element={<Add_item/>}/>
  <Route path='/Edit' element={<Edit_shop/>}/>

  <Route path='/Ordrers' element={<Ordrers/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='*' element={<h1>wrong  url addresss Page</h1>}/>
 </Routes>
</BrowserRouter> 
  


</DataProvider>
  
  )
}
