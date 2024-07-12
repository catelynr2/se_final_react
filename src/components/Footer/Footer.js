import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__button-mobile">
          <Link to={"/"} className="footer__button">
            Home
          </Link>
          <a href="https://tripleten.com/" className="footer__button">
            Tripleten
          </a>
        </div>
        <div className="footer__social-mobile">
          <a href="https://github.com/">
            <img
              className="footer__social"
              src="../../../images/github.svg"
              alt="Github logo"
            />
          </a>
          <a href="https://www.facebook.com/tripleten.tech/">
            <img
              className="footer__social"
              src="../../../images/fb.svg"
              alt="Facebook logo"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}
