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
        dotsClass: 'slick-dots-custom',
        infinite: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
      };
    
      return (
        <div className='crewBG'>
        <div className="crew-carousel">
           <p className='crew-title'><span>02</span> MEET YOUR CREW</p> 
          <Slider {...settings}>
            {/* Douglas Hurley */}
            <div className="crew-slide">
              <div className="slide-container">
              <div className="text-container">
                <h2>COMMANDER</h2>
                <h1>DOUGLAS HURLEY</h1>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                <div className="slick-dots" />
                </div>
                <img id='imgAjuste1' className="image-container" src={crew1} alt="Crew 1" />
              </div>
              </div>
    

            {/* Mark Shuttleworth */}
            <div className="crew-slide">
              <div className="slide-container">
              <div className="text-container">
                <h2>MISSION SPECIALIST</h2>
                <h1>MARK SHUTTLEWORTH</h1>
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                <div className="slick-dots" />
                </div>
                <img id='imgAjuste2' className="image-container" src={crew2} alt="Crew 2" />
              </div>
              </div>
  {/* Victor Glover */}
<div className="crew-slide">
              <div className="slide-container">
              <div className="text-container">
              <h2>PILOT</h2>
                <h1>VICTOR GLOVER</h1>
                <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                <div className="slick-dots" />
                </div>
                <img id='imgAjuste3' className="image-container" src={crew3} alt="Crew 3" />
              </div>
              </div>

            {/* Anousheh Ansari */}
            <div className="crew-slide">
              <div className="slide-container">
              <div className="text-container">
              <h2>FLIGHT ENGINEER</h2>
                <h1>ANOUSHEH ANSARI</h1>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                <div className="slick-dots" />
                </div>
                <img id='imgAjuste4' className="image-container" src={crew4} alt="Crew 4" />
              </div>
              </div>
          </Slider>
        </div>
        </div>
      );
    };
    

export default Crew;