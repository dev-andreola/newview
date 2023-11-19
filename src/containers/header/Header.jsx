import React from "react";
import people from "../../assets/people.png";
import vr from "../../assets/vr.png";
import "./header.css";

const Header = () => {
  return (
    <div className="newview__header section__padding" id="home">
      <div className="newview__header-content">
        <h1 className="gradient__text">
          Mergulhe na VR: onde o real encontra o virtual
        </h1>
        <p>
          Através de dispositivos inovadores, você se encontra imerso em
          experiências cativantes. Uma evolução que não apenas altera a maneira
          como vemos, mas como experimentamos o mundo.
        </p>

        <div className="newview__header-content__input">
          <input type="email" placeholder="Seu Endereço de E-mail" />
          <button type="button">Enviar</button>
        </div>

        <div className="newview__header-content__people">
          <img src={people} />
          <p>1.608 pessoas solicitaram acesso nas últimas 24 horas</p>
        </div>
      </div>

      <div className="newview__header-image">
        <img src={vr} />
      </div>
    </div>
  );
};

export default Header;
