import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './comp/autho/SignIn';
import SignUp from './comp/autho/SignUp';
import Fargot from './comp/autho/Fargot';
import Home from './comp/autho/Home';
import Navar from './comp/autho/Navar';
// import PriestLogin from './comp/autho/PriestLogin';
function App() {
  return (<>
<BrowserRouter>
<Navar/>
<ul>
  <li>
    <Link to ={'/'} >Home</Link>
  </li>
  <li>
    <Link to ={'/signin'} >SignIn</Link>
  </li>
  <li>
    <Link to ={'/signup'} >SignUp</Link>
  </li>
  <li>
    <Link to ={'/forgot'} >forgot</Link>
  </li>
</ul>
<Route exact path='/' component={Home}/>
<Route path='/signin' component={SignIn}/>
<Route path='/signup' component ={SignUp}/>
<Route path='/forgot' component ={Fargot}/>
</BrowserRouter>
 
   </>
  );
}

export default App;
