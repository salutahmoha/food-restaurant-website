import React from 'react'
import './Services.css'

import s1 from '../Assets/s1.png'
import s2 from '../Assets/s2.png'
import s3 from '../Assets/s3.png'

const Services = () => {
  return (
    <section id='services'>
      <div className="container">
        <h4>services</h4>
        <h3>We provide best quality food</h3>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="services-div">
              <img src={s1} alt="" className='services-img'/>
              <h6>Order</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas <br />
              adipisci temporibus? Nihil rem distinctio iure nam, quos ut magni<br />
               ipsam maxime consequuntur?</p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="services-div">
               <img src={s2} alt="" className='services-img'/>
               <h6>Shipping</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas <br />
              adipisci temporibus? Nihil rem distinctio iure nam, quos ut magni <br />
               ipsam maxime consequuntur?</p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="services-div">
              <img src={s3} alt="" className='services-img'/>
              <h6>Delivered</h6>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas <br />
              adipisci temporibus? Nihil rem distinctio iure nam, quos ut magni <br />
               ipsam maxime consequuntur?</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="service-div">
            <h2>We make quality food <br />Everyday</h2>

            <button type="button" class="btn btn-primary">Let's talk</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services