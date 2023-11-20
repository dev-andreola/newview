import React from "react";
import "./comunity.css";
import comunityImage from "../../assets/comunity.png";

const Comunity = () => {
  return (
    <div className="newview__comunity" id="com">
      <div className="newview__comunity-image">
        <img src={comunityImage} alt="possibility" />
      </div>
      <div className="newview__comunity-content">
        <h1 className="gradient__text">
        Construindo Conexões Virtuais: <br/> Nossa Comunidade VR
        </h1>
        <p>
          Em nossa comunidade, compartilhamos paixões, exploramos juntos e
          construímos laços em ambientes virtuais. Seja trocando ideias,
          participando de eventos exclusivos ou colaborando em projetos, cada
          membro contribui para moldar uma comunidade vibrante, onde a inovação
          e a diversão se encontram.
        </p>
        <h4>Solicite Acesso Antecipado para Começar</h4>
      </div>
    </div>
  );
};

export default Comunity;
