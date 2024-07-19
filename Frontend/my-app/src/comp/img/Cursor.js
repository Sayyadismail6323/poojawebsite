import Carousel from 'react-bootstrap/Carousel';
import logo from '../img/logo.png'
import Candle from '../img/Candle.png'
import Diwali from '../img/Diwali.jpg'
import Ayyappa from '../img/Ayyappa.png'
import banner1 from '../img/banner1.jpg'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1} data-interval="1000" 
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Diwali} data-interval="2000" 
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Candle} data-interval="4000" 
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;