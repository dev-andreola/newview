import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./navbar.css";

const Menu = ({ closeMenu }) => {
  return (
    <>
      <p>
        <a href="#exp" onClick={closeMenu}>
          Experiências VR
        </a>
      </p>
      <p>
        <a href="#tec" onClick={closeMenu}>
          Tecnologia VR
        </a>
      </p>
      <p>
        <a href="#com" onClick={closeMenu}>
          Comunidade
        </a>
      </p>
      <p>
        <a href="#blog" onClick={closeMenu}>
          Blog
        </a>
      </p>
    </>
  );
};

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

  const closeMenu = () => {
    setToggleMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="newview__navbar">
      <div className="newview__navbar-links">
        <div className="newview__navbar-links_logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="newview__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="newview__navbar-sign">
        <Sign />
      </div>
      <div className="newview__navbar-menu" onClick={handleMenuClick}>
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
            <div className="newview__navbar-menu_container-links">
              <Menu closeMenu={() => setToggleMenu(false)} />
            </div>
            <hr />
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
