import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import about from '../Assets/about.png';
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={about} alt="" className='about-img'/>
          </div>
          <div className="col-12 col-lg-6">
            <h4>About Us</h4>
            <h3>We speak the Good <br />food language</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum <br /> delectus corrupti
             sint, nulla est dolore facilis. <br /> Placeat laudantium, molestias ratione sunt accusamus 
             distinctio libero. <br /> Quas ullam repellendus adipisci alias sapiente.</p>

             <button type="button" class="btn btn-primary">Today's Menu</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About