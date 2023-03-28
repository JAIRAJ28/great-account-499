import React from "react";
import { Link } from "react-router-dom";

const LeftSidebarMen = () => {
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
    <div>
      <ul className="menu menMenu" style={{ overflow: "auto" }}>
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
    </div>
  );
};

export default LeftSidebarMen;
