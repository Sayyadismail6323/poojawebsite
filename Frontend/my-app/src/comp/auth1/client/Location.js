import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../img/logo.png'

import axios from 'axios'
function Location(){

    // var x = document.getElementById("demo");
    const [x,setx]= React.useState(0)
    const [y,sety]= React.useState(0)
    const [url ,seturl] = React.useState('')

        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      
          
      function showPosition(position) {
          // x.innerHTML="Latitude: " + position.coords.latitude +
          // "<br>Longitude: " + position.coords.longitude;
          // <img width="8000" height="400" src="https://maps.geoapify.com/v1/tile/carto/{7.2}/"{x}+"/"+{y}".png?&apiKey=38cb046d4a9d4455a30347cd9b59845e"/>
          const x1=position.coords.latitude;
          const  y1=position.coords.longitude;
         
          
          axios.get("https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=38cb046d4a9d4455a30347cd9b59845e")
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          setx(x1)
          sety(y1)
          console.log(x1)
          const k = "https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:" + x + "," + y +"&zoom=12.877&apiKey=38cb046d4a9d4455a30347cd9b59845e"
          console.log(k)
          seturl(k)
          return( 
            <img src={k}/>
          )
      }
    return(
     
        <>
            <div className='text-center '>
              logintude = {x}
              latitude = {y}
            <button className="Location-button btn btn-outline-dark  " >Click To give the Location</button>
            <br/>
           
              <img width="600" height="400" 
              src="https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:12.9300783,77.5275351&zoom=14&apiKey=38cb046d4a9d4455a30347cd9b59845e"
              alt="8531 East Marginal Way South, Tukwila, WA 98108, United States of America"/>
              
            
            <img width="600" height="400" src ={url} alt="1427 South Henderson Street, Seattle, WA 98108, United States of America"/>
            <div>
            <p id="demo"></p>
            </div>
            </div>
        </>
            
    )
}
export default Location;