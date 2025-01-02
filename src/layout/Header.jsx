import React from "react";
import './header.css'

function Header() {
  return (
    <>
      <nav className="flex justify-around items-center text-center h-14 bg-black text-white hover:bg-white hover:text-black font-bold ">
        <div className="flex items-center">
          <span className="text-green-600 mx-1 text-2xl">N</span>netguru
        </div>
        <div className="">
          <ul className="flex flex-wrap gap-5">
            <li>Services</li>
            <li>Industries</li>
            <li>Clients</li>
            <li>About us</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="">
          <button className="border border-white py-2 px-8 hover:border  hover:bg-green-500 rounded-lg">
            Get in touch
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
