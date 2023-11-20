import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./navbar.css";

// NAVBAR LINK LIST
const Menu = () => {
  return (
    <>
      <p>
        <a href="#exp">Experiências VR</a>
      </p>
      <p>
        <a href="#tec">Tecnologia VR</a>
      </p>
      <p>
        <a href="#com">Comunidade</a>
      </p>
      <p>
        <a href="#blog">Blog</a>
      </p>
    </>
  );
};

// NAVBAR SIGN BUTTONS
const Sign = () => {
  return (
    <>
      <p>Entrar</p>
      <button type="button">Cadastre-se</button>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="newview__navbar">
      {/* NAVBAR LOGO AND LINK LIST */}
      <div className="newview__navbar-links">
        {/* NAVBAR LOGO */}
        <div className="newview__navbar-links_logo">
          <a href="#">
            <img src={logo} />
          </a>
        </div>
        {/* NAVBAR LINK LIST */}
        <div className="newview__navbar-links_container">
          <Menu />
        </div>
      </div>
      {/* NAVBAR SIGN BUTTONS */}
      <div className="newview__navbar-sign">
        <Sign />
      </div>
      {/*  */}
      {/* NAVBAR MOBILE MENU */}
      {/*  */}
      <div className="newview__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="newview__navbar-menu_container scale-up-center">
            {/* NAVBAR MOBILE MENU LINK LIST */}
            <div className="newview__navbar-menu_container-links">
              <Menu />
            </div>
            <hr />
            {/* NAVBAR MOBILE MENU SIGN BUTTONS */}
            <div className="newview__navbar-menu_container-links-sign">
              <Sign />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
