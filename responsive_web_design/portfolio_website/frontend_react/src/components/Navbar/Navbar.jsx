import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* will be loopin through our links in our nav bar */}
        {/* organizing those links into an ARRAY */}
        {/* for each one of those items, we are going to return a list item */}
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* the link will redirect to that SECTION of the page */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
