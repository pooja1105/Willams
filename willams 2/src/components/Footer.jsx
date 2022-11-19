import React from "react";
import "./css/Footer.css";
import logo from "../Img/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  const handleTerms = () => {
    history.push("/terms");
  };
  return (
    <div className="footerbackground">
      <footer className="footer">
        <div className="footer__addr">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Eget facilisis blandit <br />
            posuere lectus tortor. Orci blandit id
            <br />
            diam in gravida.{" "}
          </p>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Social Account</h2>
            <WhatsAppIcon />
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Product</h2>

            <ul className="nav__ul">
              <Link to="/blockchain">
                <li>
                  <a href="#">Blockchain</a>
                </li>
              </Link>

              <Link to="/exchange">
                <li>
                  <a href="#">Dex</a>
                </li>
              </Link>

              <Link to="/social">
                <li>
                  <a href="#">Social Network</a>
                </li>
              </Link>

              <Link to="/Game">
                <li>
                  <Link to='/game' href="#">Gaming</Link>
                </li>
              </Link>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">About Bitechchain</h2>

            <ul className="nav__ul">
              <li>
                <Link to="/" href="#">Home</Link>
              </li>

              <li>
                <Link to='/about-us' href="#">About Us</Link>
              </li>

              <li>
                <a href="#">Roadmap</a>
              </li>
              <li>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Support</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">FAQs</a>
              </li>
              <Link to="/terms">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </Link>
              <Link to="/privacy">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </Link>
            </ul>
          </li>
        </ul>
        <hr className="divider" />

        <div className="legal">
          <p>
            2022 © Biworld Group Limited Company. All Rights Reserved
            <br />
            Lic. No. : 3851783561
          </p>
        </div>
      </footer>
    </div>
  );
}
