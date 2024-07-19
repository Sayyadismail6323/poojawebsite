import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth_client_main from './comp/auth1/client/autho_main';
import Auth_shop_main from './comp/auth1/shop/Auth_shop_main';
import Auth_Swami_main from './comp/auth1/SWAMI/autho_Swami_main';
import Autho_main from './comp/autho/Autho_main';
import './index.css';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


 const firstLogin = localStorage.getItem('firstLogin');
 const shopLogin = localStorage.getItem('shopLogin');
 const priestLogin = localStorage.getItem('priestLogin');

if(!firstLogin )
{
   root.render(
  
      <Autho_main/>
      // <Auth_shop_main/>
      // <Auth_Swami_main/>
   );
}
else
{
   if(shopLogin){
      
   root.render(
      //<Auth_client_main/>
       <Auth_shop_main/>
      // <Auth_Swami_main/>
   );

   }
   else if(priestLogin)
   {
      
   root.render(
      //<Auth_client_main/>
      // <Auth_shop_main/>
       <Auth_Swami_main/>
   );

   }
   
  else{
   root.render(
       <Auth_client_main/>
        // <Auth_shop_main/>
      //    <Auth_Swami_main/>
      );
   }

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
