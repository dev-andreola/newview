import React from "react";
import newviewLogo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="newview__footer section__padding">
    <div className="newview__footer-heading">
      <h1 className="gradient__text">
        Você quer dar um passo a frente no futuro antes dos outros?
      </h1>
    </div>

    <div className="newview__footer-btn">
      <p>Solicite Acesso Antecipado</p>
    </div>

    <div className="newview__footer-links">
      <div className="newview__footer-links_logo">
        <img src={newviewLogo} alt="gpt3_logo" />
        <p>
          Campina da Taborda 182 SP São Paulo, <br /> All Rights Reserved
        </p>
      </div>
      <div className="newview__footer-links_div">
        <h4>Links</h4>
        <hr />
        <p>Projetos</p>
        <p>Redes Sociais</p>
        <p>Contadores</p>
        <p>Contato</p>
      </div>
      <div className="newview__footer-links_div">
        <h4>Sobre Nós</h4>
        <hr />
        <p>Termos & Condições </p>
        <p>Política de Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="newview__footer-links_div">
        <h4>Contato</h4>
        <hr />
        <p>Campina da Taborda 182 SP São Paulo</p>
        <p>(12) 98996-5269</p>
        <p>contato@newview.com</p>
      </div>
    </div>

    <div className="newview__footer-copyright">
      <p>@2023 NewView VR. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
