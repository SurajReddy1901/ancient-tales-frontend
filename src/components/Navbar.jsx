import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "../style.css";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  const logoutHandler = () => {
    localStorage.clear();
    // navigate("/signup");
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/dashboard" className="nav__logo">
          Ancient Tales
        </NavLink>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/dashboard"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/dashboard/createstory"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Create
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/dashboard/stories"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Stories
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/dashboard/about"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/signup" className="nav__link" onClick={logoutHandler} >
               <p className="signout-icon">Logout</p>
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
