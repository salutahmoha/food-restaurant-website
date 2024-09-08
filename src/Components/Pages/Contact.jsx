import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";


const Contact = () => {
  return (
    <section id='contact'>

<div className="container">
        <div className="row">
          <div className="service-div">
            <h2>We make quality food <br />Everyday</h2>

            <button type="button" class="btn btn-primary">Let's talk</button>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <h2>Menu Links</h2>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Services</p>
            <p>Contact</p>
          </div>

          <div className="col-12 col-lg-3">
            <h2>Our Service</h2>
            <p>Web Design</p>
            <p>Web Development</p>
            <p>Marketing</p>
            <p>Product Management</p>
            <p>Graphic Design</p>
          </div>

          <div className="col-12 col-lg-3">
            <h2>Information</h2>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

          <div className="col-12 col-lg-3">
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

export default Contact