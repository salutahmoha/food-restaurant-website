import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'


import home from '../Assets/home.png'
import about from '../Assets/about.png'
import food1 from '../Assets/food1.png'
import food2 from '../Assets/food2.png'
import food3 from '../Assets/food3.png'
import s1 from '../Assets/s1.png'
import s2 from '../Assets/s2.png'
import s3 from '../Assets/s3.png'

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <section id='home'>
      <div className="container" id='home'>
       <div className="row">
        <div className="col-12 col-lg-6">
         <h1>Full Website</h1>
         <p>Foods the <br />most precious things</p>

         <button type="button" class="btn btn-primary">Today's Menu</button>

        </div>
        <div className="col-12 col-lg-6">
          <img src={home} alt="" className='img-fluid' />
        </div>
       </div>
      </div>

      <div className="container" id='about'>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={about} alt="" className='about-img'/>
          </div>
          <div className="col-12 col-lg-6">
            <h4>About Us</h4>
            <h3>We speak the Good <br />food language</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Harum delectus corrupti sint, nulla est dolore facilis Placeat <br />
            laudantium, molestias ratione sunt accusamus distinctio libero. <br />
             Quas ullam repellendus adipisci alias sapiente.</p>

             <button type="button" class="btn btn-primary">Today's Menu</button>
          </div>
        </div>
      </div>

      <div className="container" id='menuu'>
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

      <div className="container" id='services'>
        <h4>services</h4>
        <h3>We provide best quality food</h3>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="services-div">
                <div className="services-img">
                  <img src={s1} alt="" className='img-fluid'/>
                </div>
                <h6>Order</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas <br />
                 adipisci temporibus? Nihil rem distinctio iure nam, quos ut magni <br />
                 ipsam maxime consequuntur?</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="services-div">
                <div className="services-img">
                  <img src={s2} alt="" className='img-fluid'/>
                </div>
                <h6>Order</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas <br />
                 adipisci temporibus? Nihil rem distinctio iure nam, quos ut magni <br />
                 ipsam maxime consequuntur?</p>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="services-div">
                <div className="services-img">
                  <img src={s3} alt="" className='img-fluid'/>
                </div>
                <h6>Order</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas <br />
                 adipisci temporibus? Nihil rem distinctio iure nam, quos ut magni <br />
                 ipsam maxime consequuntur?</p>
              </div>
            </div>
          </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="service-div1">
            <h2>We make quality food <br />Everyday</h2>

            <button type="button" class="btn btn-primary">Let's talk</button>
          </div>
        </div>
      </div>

      <div className="container" id='contact'>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6 ">
            <h2>Menu Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <h2>Our Service</h2>
            <p>Web Design</p>
            <p>Web Development</p>
            <p>Marketing</p>
            <p>Product Management</p>
            <p>Graphic Design</p>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <h2>Information</h2>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="col-12 col-lg-3 col-md-6">
            <h2>Contact</h2>
            <div className="icons">
              <div className="icon"><BsFacebook size={25}/></div>
              <div className="icon"><BsInstagram size={25}/></div>
              <div className="icon"><BsLinkedin size={25}/></div>
              <div className="icon"><BsTwitter size={25}/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home