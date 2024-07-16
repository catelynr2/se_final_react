import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
// import LoginModal from "../LoginModal/LoginModal";

export default function Navbar({
  onOpenLogin,
  signedIn,
  setSignedIn,
  // setDroppedDown,
  theme,
}) {
  // const [signedIn, setSignedIn] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location, setLocation] = useState("");
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const toggleSignIn = () => {
    setSignedIn((prevSignedIn) => !prevSignedIn); //this is only so reviewer can see that my saved articles page is working correctly. Will be removed later
    // if (signedIn) {
    //   setSignedIn(false);
    // } else {
    //   handleOpenLoginModal();
    // }
    // setIsLoginModalOpen((prevState) => !prevState);
  };

  const toggleMenuDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const goToHome = () => {
    navigate("/");
    setLocation("home");
  };

  const goToSavedArticles = () => {
    navigate("/saved-articles");
    setLocation("saved-articles");
  };

  useEffect(() => {
    setLocation("home"); //change back and forth from 'saved-articles' and 'home' for testing
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth, setWindowWidth);

  console.log(location);

  return (
    <>
      <nav className="navbar">
        <p
          className={
            signedIn &&
            location === "saved-articles" &&
            windowWidth < 682 &&
            isDropdownOpen
              ? "navbar__sitename"
              : `navbar__sitename ${
                  theme === "light" && "navbar__sitename-light"
                }`
          }
        >
          NewsExplorer
        </p>
        {signedIn ? (
          <div
            className={`navbar__right-tabs ${
              theme === "light" && "navbar__right-tabs-light"
            }`}
          >
            <p
              onClick={goToHome}
              className={`navbar__home-tab ${
                theme === "light" && "navbar__home-tab-light"
              }`}
            >
              Home
            </p>
            <button
              onClick={goToSavedArticles}
              className={`navbar__saved-tab ${
                theme === "light" && "navbar__saved-tab-light"
              }`}
            >
              Saved Articles
            </button>
            <button
              onClick={() => {
                toggleSignIn();
              }}
              className={`navbar__button-signout ${
                theme === "light" && "navbar__button-signout-light"
              }`}
            >
              <p
                className={`navbar__button-name ${
                  theme === "light" && "navbar__button-name-light"
                }`}
              >
                Name
              </p>

              <img
                className="img__signout"
                src={
                  theme === "light"
                    ? "../../../images/signout-black.svg"
                    : "../../../images/signout-white.svg"
                }
                alt="signout"
              />
            </button>
          </div>
        ) : (
          <div className="navbar__right-tabs">
            <p className="navbar__home-tab">Home</p>
            <button
              onClick={() => {
                onOpenLogin();
                toggleSignIn();
              }}
              className="navbar__button-signin"
            >
              Sign In
            </button>
          </div>
        )}
        <img
          onClick={() => {
            toggleMenuDropdown();
          }}
          src={
            isDropdownOpen
              ? "../../../images/close-button.svg"
              : theme === "light"
              ? "../../../images/menu-black.svg"
              : "../../../images/menu-white.svg"
          }
          className="navbar__menu-icon"
          alt="Menu"
        />
      </nav>
      {isDropdownOpen ? (
        <div className="navbar__menu-dropdown">
          {signedIn ? (
            <div className="navbar__menu-dropdown-content">
              {location === "home" ? (
                <p className="navbar__home-tab" onClick={goToSavedArticles}>
                  Saved Articles
                </p>
              ) : (
                <p className="navbar__home-tab" onClick={goToHome}>
                  Home
                </p>
              )}
              <button
                className="navbar__button-signin"
                onClick={() => {
                  toggleMenuDropdown();
                  onOpenLogin();
                  toggleSignIn();
                }}
              >
                Sign in
              </button>
            </div>
          ) : (
            <div className="navbar__menu-dropdown-content">
              <p className="navbar__home-tab" onClick={goToHome}>
                Home
              </p>
              <button
                className="navbar__button-signin"
                onClick={() => {
                  toggleMenuDropdown();
                  onOpenLogin();
                  toggleSignIn();
                }}
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
