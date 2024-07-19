


import React, { useState } from 'react'
import data_list from '../PrimaryServices';
import data_list1 from '../DevotionalServices (1)';

import logo from '../img/logo.png';




export default function Services() {
  return (
       <>
        <div>
<h1 className=' text-center font-weight-bold container-fluid   text-white text-center bg-primary'>
  Primary Services
</h1>
<Calender/>          
        </div>
         <div>
         <h1 className=' text-center font-weight-bold container-fluid   text-white text-center bg-primary'>
  Devotional Services 
</h1>
          
         <Calender1/>          
                 </div>
       
       
       </>
    );
};




 const  Calender=()=> {

  const [data,setData] = useState(data_list);
  
  function handle_item(id){
    alert(id);
  }
  function remove(id){
    const newlist = data.filter((i)=>i.id !== id);
    setData(newlist);
  }
  return (



<div className='row     text-center  '>

{
  data.map(val =>
    
    <div key={val.id}  onClick={()=>{handle_item(val.id)
    }} className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3    text-center' >
    <div className=' container'>
            <img src={val.img} alt=
            "ser" width="300px" height="300px"/>
            <h2><a className=' nav-link' href='/CustomerLogin'>  {val.name}</a></h2>
            <p>{val.Description}</p>
    </div>
 

</div>
  )
}

</div>

 )
}

const  Calender1=()=> {

  const [data,setData] = useState(data_list1);
  
  function handle_item(id){
    alert(id);
  }
  function remove(id){
    const newlist = data.filter((i)=>i.id !== id);
    setData(newlist);
  }
  return (



<div className='row      text-center  '>

{
  data.map(val =>
    
    <div key={val.id}  onClick={()=>{handle_item(val.id)
    }} className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3   text-center' >
    <div className=' container'>
            <img src={val.img} alt=
            "ser" width="300px" height="300px"/>
            <h2><a className=' nav-link' href='/CustomerLogin'>  {val.name}</a></h2>
            <p>{val.Description}</p>
    </div>
 




  
   
</div>
  )
}

</div>

 )
}