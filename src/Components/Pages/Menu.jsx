import React from 'react'
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import food1 from '../Assets/food1.png'
import food2 from '../Assets/food2.png'
import food3 from '../Assets/food3.png'

const Menu = () => {
  return (
    <section id='menu'>
      <div className="container">
        <div className="row">
          <h4>Food menu</h4>
          <h3>Fresh taste and great price</h3>
          <div className="col-12 col-lg-4">
            <div className="menu-div">
              <img src={food1} alt="" className='menu-img'/>
              <h4>Chicken Burger</h4>
              <h5>Tasty food</h5>
              <h6>$20</h6>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="menu-div">
              <img src={food2} alt="" className='menu-img'/>
              <h4>Chicken Burger</h4>
              <h5>Tasty food</h5>
              <h6>$20</h6>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="menu-div">
              <img src={food3} alt="" className='menu-img'/>
              <h4>Chicken Burger</h4>
              <h5>Tasty food</h5>
              <h6>$20</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu