import React from 'react'
import itemlist from '../../itemlist';
import { Link } from 'react-router-dom';

function Product1() {
  return (
  
    <div className='container-fluid   row text-center ' >
      <div className='col-lg-6 col-md-5 col-sm-12     '>
        <img
          src="https://cf.cycle.in/cachewebp/data/Lia-Pineapple-incense-sticks-800x800.webp"
          alt="Lia Pineapple"
        />
      </div>
      <div className='col '>
        <h1>Lia Pineapple Twirl Agarbatti</h1>
        <h4>MRP (Inclusive of all Taxes)</h4>
        <h1>₹50</h1>



        <button className='hover_box btn btn-outline-warning'>
                 <h4>  Add to Cart      </h4>
      </button>
        <h6>Fragrance forms a lasting impression in our mind. They play into our brain and influence our memories, which in turn affects our behaviour and emotional health. They play an important role in helping us understand the world and interpret various activities of the world. The fragrance of Pineapple is delicious, bright, pleasant and uplifting. 

        Light Lia Pineapple Twirl Agarbatti and enjoy the crisp, tart and delicious notes of pineapple that evokes a feeling of being by a calm beach with rhythmic waves on a nice sunny day.</h6>
      </div>

  </div>
  
  )
}

export default Product1