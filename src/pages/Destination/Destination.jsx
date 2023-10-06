import { useState } from "react";
import "./Destination.scss";

// Importa las imágenes
import imgMoon from "../../Img/Moon.png";
import imgMars from "../../Img/Mars.png";
import imgEuropa from "../../Img/Europa.png";
import imgJupiter from "../../Img/Jupiter.png";

const destinations = [
  {
    name: "Moon",
    btnName: "Moon",
    images: imgMoon,

    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: imgMars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: imgEuropa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Jupiter",
    images: imgJupiter,
    description:
      "Júpiter, el gigante gaseoso más grande de nuestro sistema solar, destaca por su densa atmósfera, bandas de nubes y el Gran Manchón Rojo. Es un objeto de gran interés científico y observacional.",
    distance: "778 mill. km",
    travel: "1 year",
  },
];

const Destination = () => {
  const [planets] = useState(destinations);
  const [Value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[Value];

  return (
    <div className="Destination">
      <section className="content">
        <div className="left">
          <h1 className="title-img">
            <span className="title-modified">01</span>
            <span>PICK YOUR DESTINATION</span>
          </h1>
          <img className="image" src={images} alt={name} title={name} />
        </div>
        <div className="right">
          <div className="options">
            {planets.map((item, index) => (
              <button
                className="button"
                key={index}
                onClick={() => setValue(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="name">
            <h1>{name}</h1>
          </div>
          <div className="desc">
            <p>{description}</p>
          </div>
          <hr />
          <div className="details">
            <div className="column">
              <div className="column-heading">Avg Distance</div>
              <div className="column-detail">
                <span>{distance}</span>
              </div>
            </div>
            <div className="column">
              <div className="column-heading">Est Travel Time</div>
              <div className="column-detail">
                <span>{travel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
