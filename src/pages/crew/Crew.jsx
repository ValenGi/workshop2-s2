import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Crew.scss';

import crew1 from "../../../public/crew-douglas-hurley.webp";
import crew2 from "../../../public/crew-mark-shuttleworth.webp";
import crew3 from "../../../public/crew-victor-glover.webp";
import crew4 from "../../../public/crew-anousheh-ansari.webp";



const Crew = () => {
    const settings = {
        dots: true,
        
      };
    
      return (
        
        <div className="crew-carousel">
            02 MEET YOUR CREW
          <Slider {...settings}>
            {/* Douglas Hurley */}
            <div className="crew-slide">
              <div className="slide-container">
              <div>
                <h2>Douglas Hurley</h2>
                <h3>NASA Astronaut</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="slick-dots" />
                </div>
                <img className="image-container" src={crew1} alt="Crew 1" />
              </div>
              </div>
    

            {/* Mark Shuttleworth */}
            <div className="crew-slide">
              <div className="slide-container">
              <div>
                <h2>Mark Shuttleworth</h2>
                <h3>Space Tourist</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="slick-dots" />
                </div>
                <img className="image-container" src={crew2} alt="Crew 2" />
              </div>
              </div>
  {/* Victor Glover */}
<div className="crew-slide">
              <div className="slide-container">
              <div>
              <h2>Victor Glover</h2>
                <h3>NASA Astronaut</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="slick-dots" />
                </div>
                <img className="image-container" src={crew3} alt="Crew 3" />
              </div>
              </div>

            {/* Anousheh Ansari */}
            <div className="crew-slide">
              <div className="slide-container">
              <div>
              <h2>Anousheh Ansari</h2>
                <h3>Space Tourist</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="slick-dots" />
                </div>
                <img className="image-container" src={crew4} alt="Crew 4" />
              </div>
              </div>
          </Slider>
        </div>
      );
    };
    

export default Crew;