import { IoLocationSharp } from "react-icons/io5";
import "./Footer.css";
import { BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <div className="firstt">
        <div className="check1st">
          <div className="check2nd">
            <h1 style={{ textAlign: "start", fontSize: "16px" }}>
              JOIN OUR NEWSLETTER
            </h1>
          </div>
          <div className="check2nd1">
            <input
              style={{
                borderTop: "0",
                borderRight: "0",
                borderLeft: "0",
              }}
              placeholder="Enter Email Address"
            />
          </div>
        </div>
        <div className="country">
          <p>INSTAGRAM</p>
          <p>FACEBOOK</p>
          <p>TWITTER</p>
          <p>PINTEREST</p>
          <p>YOUTUBE</p>
          <p>SPOTIFY</p>
        </div>
        {/* Footer Here */}
        <div className="footer">
          <ul className="smallscreen">
            <p>Help</p>

            <li>
              {" "}
              <Link>MY ZARA ACCOUNT</Link>
            </li>
            <li>
              {" "}
              <Link>ITEMS AND SIZES</Link>
            </li>
            <li>
              {" "}
              <Link>GIFT OPTIONS</Link>
            </li>
            <li>
              {" "}
              <Link>SHIPPING</Link>e
            </li>
            <li>
              {" "}
              <Link>PAYMENT AND INVOICES</Link>
            </li>

            <li>
              {" "}
              <Link>MY PURCHASES</Link>
            </li>
            <li>
              {" "}
              <Link>EXCHANGES, RETURNS AND REFUNDS</Link>
            </li>
            <li>
              {" "}
              <Link>ZARA EXPERIENCIES</Link>
            </li>
          </ul>

          <ul className="smallscreen">
            <p>
              {" "}
              <Link>FOLLOW US</Link>
            </p>
            <li>
              {" "}
              <Link>NEWSLETTER</Link>
            </li>
            <li>
              {" "}
              <Link>INSTAGRAM</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>FACEBOOK</Link>
            </li>
            <li>
              {" "}
              <Link>TWITTER</Link>
            </li>
            <li>
              {" "}
              <Link>PINTEREST</Link>
            </li>
            <li>
              {" "}
              <Link>YOUTUBE</Link>
            </li>
            <li>
              {" "}
              <Link>COMPANY</Link>
            </li>
          </ul>
          <ul className="smallscreen">
            <p>
              <Link>ABOUT US</Link>
            </p>
            <li>
              <Link>JOIN LIFE</Link>
            </li>
            <li>
              <Link>OFFICES</Link>
            </li>
            <li>
              <Link>STORES</Link>
            </li>
            <li>
              <Link>WORK WITH US</Link>
            </li>
            <li>
              <Link>POLICIES</Link>
            </li>
          </ul>
          <ul className="smallscreen">
            <p>
              <Link>POLICIES</Link>
            </p>
            <li>
              <Link>PRIVACY POLICY</Link>
            </li>
            <li>
              <Link>PURCHASE CONDITIONS</Link>
            </li>
            <li>
              <Link>GIFT CARD CONDITIONS</Link>
            </li>
            <li>
              <Link>COOKIES SETTINGS</Link>
            </li>
          </ul>
        </div>
        <div className="Sociallinks">
          <Image
            color="#AEE2FF"
            src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
            alt=""
          />
          <BsPinterest color="black" size="1em" />
          <GrInstagram color="black" size="1em" />
          <FaFacebookSquare color="black" size="1em" />
          <BsTwitter color="black" size="1em" />
        </div>

        <div
          className="EndFoot"
          style={{
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="last"
            style={{
              fontSize: "7px",
            }}
          >
            <p>
              NAME AND ADDRESS OF THE MANUFACTURER:
              <br />
              INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)
              <br />
              AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A
              CORUÑA), SPAIN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
