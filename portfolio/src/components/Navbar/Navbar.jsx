import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-purple-700 text-white flex justify-between items-center px-14 py-5">
        <div className="flex items-center">
          <span className="text-3xl font-bold">Folio.io</span>
        </div>
        <ul className="flex space-x-6">
          <li><Link  to="/">Home</Link></li>
          <li><Link  to="/about">About</Link></li>
          <li><Link  to="/portfolio">Portfolio</Link></li>
          <li><Link  to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
