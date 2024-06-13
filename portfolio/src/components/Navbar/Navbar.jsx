import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <div>
      <nav className="bg-purple-700 text-white flex justify-between items-center px-14 py-5">
        <div className="flex items-center">
          <span className="text-3xl font-bold">Folio.io</span>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
