import React from 'react'

import Navar from './Navar'
import Profile from './Profile'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home'
import Pooja from './Pooja';
import Ordrers from './Ordrers';
import Edit_clint from './Edit';
import Location from './Location';
import BookPriest from './BookPriest';
import Product1 from './Product1';
import {DataProvider} from './Global'
import Pooja_client from './pooja_confirm'


export default function Auth_client_main() {
  return (
<DataProvider>
<BrowserRouter>
<Navar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Pooja' element={<Pooja/>}/>
  <Route path='/poojaconfirm' element={<Pooja_client/>}/>

  <Route path='/Ordrers' element={<Ordrers/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='/Edit' element={<Edit_clint/>}/>
  <Route path= '/Location' element={<Location/>}/>
  <Route path ='/BookPriest'element={<BookPriest/>}/>
  <Route path= '/Product1' element={<Product1/>}/>
  <Route path='*' element={<h1>wrong  url addresss Page</h1>}/>
  </Routes>
  </BrowserRouter>


</DataProvider>  )
}
