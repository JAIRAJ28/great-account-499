import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaSearch, FaShoppingCart, FaQuestion, FaUser } from 'react-icons/fa';
import FashionIx from "../Images/FashionIx.png"

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav>
      <div className="sideBar">
        <FaBars size={30} /></div>
      <div className="logo">
        <img src={FashionIx} alt="Logo" />
      </div>

      <div className="search-box">
        <input type="text" placeholder="SEARCH" className="searchInputBox" />

      </div>

      <div className="menu">
        {screenWidth <= 500 && (
          <button onClick={toggleNav} className="btn">
            <FaBars />
          </button>
        )}
        {(toggleMenu || screenWidth > 500) && (
          <ul className="list">
            <li className="items">
              <a href="#"> <FaUser /></a>
            </li>

            <li className="items">
              <a href="#">
                <FaQuestion />
              </a>
            </li>

            <li className="items">
              <a href="#">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
