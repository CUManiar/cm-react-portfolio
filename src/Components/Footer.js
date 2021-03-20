import React from "react";

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul>
            <li>Modified with love by the Chiragkumar Maniyar </li>
          </ul>

          <ul className="copyright">
            <li>
              &copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker
            </li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <span role="img" aria-label="image" className="icon-up-open"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
