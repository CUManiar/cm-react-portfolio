import React, { useState } from "react";

const Header = ({ data }) => {
  const [active, setActive] = useState(null);
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;

    const handleHover = (e) => {
      console.log(e);
      setActive(e);
    };

    var networks = data.social.map(function (network) {
      return (
        <li
          key={network.name}
          onMouseEnter={() => handleHover(network.name)}
          onMouseLeave={() => handleHover("")}
        >
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <span
              role="img"
              aria-label="image"
              className={network.className}
            ></span>
          </a>
        </li>
      );
    });
  }
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <h4 className="network-name">{active}</h4>
          <div>
            <ul className="social">{networks}</ul>
          </div>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
