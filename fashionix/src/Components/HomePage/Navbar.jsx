import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaShoppingCart, FaQuestion, FaUser } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import FashionIx2 from "../Images/FashionIx2.png";
import FashionIx from "../Images/FashionIx.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState("");
  const [svgColor, setSvgColor] = useState("white");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 800) {
      setIsScrolled(true);
      setLogoSrc(FashionIx);
      setSvgColor("black");
    } else {
      setIsScrolled(false);
      setLogoSrc(FashionIx2);
      setSvgColor("white");
    }
  };


  const searchBoxClass = isScrolled
    ? "searchInputBox scrolled"
    : "searchInputBox";

  return (
    <nav className="navBar">
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="SEARCH"
          className={searchBoxClass}
          style={{
            color: isScrolled ? "black" : "white",
            borderBottom: isScrolled ? "1px solid black" : "1px solid white",
          }}
        />
        <style>{`.searchInputBox::placeholder { color: ${
          isScrolled ? "black" : "white"
        }; }`}</style>
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
              <Link to={"/login"}>
                <FaUser style={{ color: svgColor }}/>
              </Link>
            </li>

            <li className="items">
              <Link to={""}>
                <FaQuestion style={{ color: svgColor }} />
              </Link>
            </li>

            <li className="items">
              <Link to={"/cart"}>
                <FaShoppingCart style={{ color: svgColor }} />
              </Link>
            </li>
            <li className="items">
              <Link >
                <RiAdminLine style={{ color: svgColor }} />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
