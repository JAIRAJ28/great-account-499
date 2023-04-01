import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const LeftSidebar = ({ activeIndexs }) => {
  const [colorB, setColor] = useState("");
  const [man, setMan] = useState(false);
  const [theme, setTheme] = useState("black");
  const [val, setVal] = useState(true);
  const location = useLocation();
  const handleChange = (e) => {
    changeVal();
    if (e.target.checked) {
      setColor("white");
    } else {
      setColor("");
    }
  };

  const changeVal = () => {
    setVal(!val);
  };

  useEffect(() => {
    if (activeIndexs >= 0) {
      if (activeIndexs % 2 === 0) {
        setTheme("white");
      } else {
        setTheme("black");
      }
    } else if (val === true) {
      setTheme("transparent");
    }

    if (location.pathname !== "/") {
      setTheme("black");
    }
  }, [activeIndexs, val, location]);

  const menuItemWomen = [
    "NEW",
    "BEST SELLERS",
    "BASICS",
    "JACKETS | OVERSHIRTS",
    "DRESSES | JUMPSUITS",
    "BLAZERS",
    "SHIRTS",
    "TROUSERS",
    "TOPS",
    "JEANS",
    "KNITWEAR",
    "SWEATSHIRTS",
    "T-SHIRTS",
    "WAISTCOATS | GILETS",
    "SHORTS | SKORTS",
    "SKIRTS",
    "CO-ORD SETS",
    "SUITS",
    "COATS | PUFFER JACKETS",
    "ACCESSORIES",
    "SHOES",
    "BAGS",
    "PERFUMES",
    "Special Prices",
    "WEAR TO WORK",
    "SPECIAL EDITION",
  ];
  const menuItemMen = [
    "SPECIAL OCCASION",
    "LINEN",
    "SWIMWEAR",
    "NEW",
    "ZARA ATHLETICZ",
    "ZARA ORIGINS",
    "BEST SELLERS",
    "BASICS",
    "TROUSERS",
    "CARGO | PARACHUTE",
    "JEANS",
    "JACKETS | OVERSHIRTS",
    "HOODIES | SWEATSHIRTS",
    "T-SHIRTS",
    "SHIRTS",
    "POLO SHIRTS",
    "SHORTS",
    "SWEATERS | CARDIGANS",
    "SUITS",
    "BLAZERS",
    "TRENCH COATS",
    "SHOES",
    "BAGS | BACKPACKS",
    "ACCESSORIES",
    "PERFUMES",
    "SPECIAL PRICES",
    "SPECIAL EDITION",
    "GIFT CARD",
    "JOIN LIFE",
    "+ INFO",
  ];
  return (
    <>
      <Container>
        <div className="menuContainer" style={{ backgroundColor: colorB }}>
          <header className="header" style={{ backgroundColor: colorB }}>
            <input
              className="menu-btn"
              type="checkbox"
              id="menu-btn"
              onClick={(e) => handleChange(e)}
            />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <div className="menuLogo"></div>
            <div className="menuTop">
              <Link to={"/women"}>
                <span
                  style={
                    man
                      ? {}
                      : { fontWeight: "bold", textDecoration: "underline" }
                  }
                  onClick={() => setMan(false)}
                >
                  {/* <button
                  className="btn"
                  style={
                    man
                      ? {}
                      : { fontWeight: "bold", textDecoration: "underline" }
                  }
                  onClick={() => setMan(false)}
                > */}
                  WOMEN
                </span>
                {/* </button> */}
              </Link>
              <Link to={""}>
                <span
                  onClick={() => setMan(true)}
                  style={
                    man
                      ? { fontWeight: "bold", textDecoration: "underline" }
                      : {}
                  }
                >
                  {/* <button
                    className="btn"
                    style={
                      man
                        ? { fontWeight: "bold", textDecoration: "underline" }
                        : {}
                    }
                    onClick={() => setMan(true)}
                  > */}
                  MENS
                  {/* </button> */}
                </span>
              </Link>
              <Link to={""}>
                <span>{/* <button className="btn">KIDS</button> */}KIDS</span>
              </Link>
              <Link to={""}>
                <span>
                  {/* <button className="btn">BEAUTY</button> */}
                  BEAUTY
                </span>
              </Link>
            </div>
            <ul
              className="menu"
              style={
                man
                  ? { display: "none" }
                  : { display: "block", overflow: "auto" }
              }
            >
              {menuItemWomen.map((ele, index) => (
                <li key={index}>
                  <Link
                    to={``}
                    style={
                      ele === "SPECIAL PRICES"
                        ? {
                            color: "rgb(245, 57, 147)",
                            marginTop: "15px",
                            fontStyle: "italic",
                          }
                        : { marginTop: "15px" }
                    }
                  >
                    {ele}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className="menu"
              style={
                man
                  ? { display: "block", overflow: "auto" }
                  : { display: "none" }
              }
            >
              {menuItemMen.map((elem, index) => (
                <li key={index}>
                  <Link
                    to={``}
                    style={
                      elem === "SPECIAL PRICES"
                        ? {
                            color: "rgb(245, 57, 147)",
                            marginTop: "15px",
                            fontStyle: "italic",
                          }
                        : { marginTop: "15px" }
                    }
                  >
                    {elem}
                  </Link>
                </li>
              ))}
            </ul>
          </header>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  z-index: 5;
  .menuContainer {
    height: 70px;
  }
  .navRightSection {
    width: 30%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
  }
  .navRightSection > a > div:first-child {
    width: 100px;
    overflow: hidden;
  }
  .navRightSection > a > div:first-child > input {
    border: 0px;
    border-bottom: 1px solid black;
    outline: none;
    background-color: transparent;
  }
  .navRightSection > a > div:first-child > input::placeholder {
    color: black;
  }
  .navRightSection > div:last-child {
    width: 200px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-evenly;
    font-size: 13px;
  }
  .menuLogo {
    display: none;
  }
  .menuContainer a {
    color: #000;
  }
  /* header */
  .header {
    position: fixed;
    width: 30%;
  }
  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    height: 50vh;
  }
  .header li a {
    display: block;
    text-decoration: none;
  }
  .header {
    float: left;
    font-size: 2em;
    text-decoration: none;
    text-align: left;
    padding-left: 15px;
    z-index: 5;
  }
  /* menu */
  .header .menu {
    clear: both;
    max-height: 0;
    text-transform: uppercase;
    font-size: 12px;
    color: #343a40;
    padding-left: 25px;
  }
  ul::-webkit-scrollbar {
    width: 2px;
  }

  ul::-webkit-scrollbar-track {
    background-color: rgb(209, 209, 209);
  }

  ul::-webkit-scrollbar-thumb {
    background-color: rgb(40, 39, 39);
  }
  li a {
    color: #343a40;
    padding-top: 2px;
    cursor: pointer;
  }
  .menuTop {
    display: none;
  }

  .btn {
    border: none;
    background: transparent;
  }
  /* menu icon */
  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: left;
    padding: 28px 20px;
    user-select: none;
  }
  .header .menu-icon .navicon {
    background: white;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
    margin-top:20px;
  }
  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: white;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .header .menu-icon .navicon:before {
    top: 5px;
  }
  .header .menu-icon .navicon:after {
    top: -5px;
  }
  /* menu btn */
  .header .menu-btn {
    display: none;
  }
  .header .menu-btn:checked ~ .menu {
    margin-top: 40px;
    max-height: 100vh;
    padding-bottom: 100vh;
    overflow: auto;
    background-color: white;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
  }
  .header .menu-btn:checked ~ .menuTop {
    display: flex;
    gap: 10px;
    font-size: 12px;
    margin-top: 0px;
    padding-left: 25px;
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
  }
  .header .menu-btn:checked ~ .menuTop a {
    text-decoration: none;
  }
  .header .menu-btn:checked ~ .menuLogo {
    display: block;
    width: 250px;
    height: 250px;
    padding-left: 70px;
    padding-top: 20px;
    margin-bottom: -120px;
    cursor: pointer;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
    background: #333;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
    background: #333;
  }
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .logo {
    width: 250px;
    padding-left: 90px;
    padding-top: 20px;
  }
  /* 48em = 768px */
  @media (min-width: 1000em) {
    .header li {
      float: left;
    }

    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: left;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
  .navRightSection > a > div:first-child > input {
    border-color: ${(props) => props.theme};
  }
  .navRightSection > a > div:first-child > input::placeholder {
    color: ${(props) => props.theme};
  }
  .menuContainer .header .menu-btn {
    color: ${(props) => props.theme};
  }
  .navRightSection a {
    text-decoration: none;
    color: ${(props) => props.theme};
  }
  .navRightSection span {
    text-decortaion: none;
    color: ${(props) => props.theme};
  }
  .navRightSection p {
    text-decortaion: none;
    cursor: pointer;
    color: ${(props) => props.theme};
  }
  .navRightSection svg {
    fill: ${(props) => props.theme};
  }
  @media only screen and (min-width: 769px) and (max-width: 1200px) {
    .header {
      width: 50%;
      padding: 0px;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 845px) {
    .navRightSection {
      flex-direction: column-reverse;
      align-items: flex-end;
      margin-top: 20px;
    }
    .header {
      width: 50%;
      padding: 0px;
    }
    .logo {
      width: 250px;
      padding-left: 90px;
      padding-top: 20px;
    }
    .navRightSection > div:last-child {
      display: flex;
      gap: 30px;
      justify-content: right;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .navRightSection {
      flex-direction: column-reverse;
      align-items: flex-end;
      margin-top: 20px;
    }
    .header {
      width: 65%;
      padding: 0px;
    }
    .logo {
      width: 200px;
    }
    .navRightSection > div:last-child {
      display: flex;
      gap: 30px;
      justify-content: right;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .navRightSection {
      flex-direction: column-reverse;
      align-items: flex-end;
      margin-top: 20px;
    }
    .header {
      width: 100%;
      padding: 0px;
    }
    .logo {
      width: 150px;
      padding-left: 50px;
    }
    .help {
      display: none;
    }
    .navRightSection > div:last-child {
      width: 150px;
      display: flex;
      gap: 10px;
      justify-content: right;
    }
    .menuLogo > svg {
      padding-left: 30px;
    }
  }
  @media only screen and (max-width: 320px) {
    .navRightSection {
      flex-direction: column-reverse;
      align-items: flex-end;
      margin-top: 20px;
    }
    .header {
      width: 100%;
      padding: 0px;
    }
    .logo {
      width: 100px;
      padding-left: 50px;
    }
    .help {
      display: none;
    }
    .navRightSection > div:last-child {
      width: 100px;
      display: flex;
      gap: 0px;
    }
    .menuLogo > svg {
      width: 150px;
    }
  }
`;

export default LeftSidebar;
