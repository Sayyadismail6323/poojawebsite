import React from 'react'
import Navar from './Navar'
import About from './About'
import PriestLogin from './PriestLogin';
import ShopkeeperLogin from './ShopkeeperLogin';
import CustomerLogin from './CustomerLogin';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home'
import Fargot from './Fargot'
import Services from './Services'
import NewHome from './NewHome'
import ShopkeeperSignup from './ShopkeeperSignup';
import PriestSignup from './PriestSignup';
import CustomerSignup from './CustomerSignup';
import Auth_client_main from '../auth1/client/autho_main'
import Admin from './Admin';



import {DataProvider} from './Global'


export default function Autho_main() {
  return (
<DataProvider>

<BrowserRouter>
<Navar/>
<Routes>
<Route path='/' element={<NewHome/>}/>

  <Route path='/item' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/PriestLogin' element={<PriestLogin/>}/>
  <Route path='/CustomerLogin' element={<CustomerLogin/>}/>
  <Route path='/ShopkeeperLogin' element={<ShopkeeperLogin/>}/>
  <Route path='/forgot' element={<Fargot/>}/>
  <Route path='/PriestSignup' element={<PriestSignup/>}/>
  <Route path='/CustomerSignup' element={<CustomerSignup/>}/>
  <Route path='/ShopkeeperSignup' element={<ShopkeeperSignup/>}/>
  <Route path='/Admin' element={<Admin/>}/>
  <Route path='*' element={<h1>Wrong  URL Addresss Page</h1>}/>





  
  </Routes></BrowserRouter> </DataProvider>
 )
}
