import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#wgpt3">Produtos</a>
      </p>
      <p>
        <a href="#features">Experiências VR</a>
      </p>
      <p>
        <a href="#possibility">Tecnologia VR</a>
      </p>
      <p>
        <a href="#blog">Comunidade</a>
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

  return (
    <div className="newview__navbar">
      <div className="newview__navbar-links">
        <div className="newview__navbar-links_logo">
          <a href="#">
            <img src={logo} />
          </a>
        </div>
        <div className="newview__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="newview__navbar-sign">
        <Sign />
      </div>
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
            <div className="newview__navbar-menu_container-links">
              <Menu />
            </div>
            <hr/>
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
