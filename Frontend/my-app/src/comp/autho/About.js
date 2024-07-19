// @flow strict

import * as React from 'react';
import logo from '../img/logo.png'
import '../../App.css';
export default About;

function About() {

  return (
    <>
      <div className="wrapper">
        <div className="background-color">
          <div className="bg-1"></div>
          <div className="bg-2"></div>
        </div>
        <div className="about-container">
        <div className="img-container">
          <img src={logo} alt="image"/>
        </div>
        <div className="text-container">
          <h1>About Us</h1>
          <p><span style={{color:"blue"}}> Online Pooja Samagri</span> is the Number One preferred Digital Platform for ALL Hindu Devotional needs and Spiritual services. Online Pooja Samagri has been established to connect the current and future generations to Hinduism digitally (Web Portal, Android and iOS). In this age of Globalisation and Technology, the present and upcoming generations are moving away from their cultural roots. With the westernization taking over the culture, the age-old traditions, values and etiquettes are becoming extinct.  Our goal is to ensure that the roots and culture of Hinduism are preserved and carry forwarded for generations to come. <b> Our Vision </b> is to bring "Inspiration and Devotion" to the younger/future generation towards Hindu Dharma with the help of the state of art Information Technology.
          </p>
          {/* <p></p> */}
          {/* <a href="">Read more</a> */}
        </div>
        </div>
      </div>

    </>
  );
}

