import React from "react";
import "./tecnology.css";
import Feature from "../../components/feature/Feature";

const tecnologyData = [
  {
    title: "Visão Além dos Limites",
    text: "Avanços notáveis em óculos de Realidade Virtual proporcionam uma experiência visual impressionante. ",
  },
  {
    title: "Toque Virtual Real",
    text: "A integração de sensações táteis revoluciona a experiência VR. Luvas e acessórios hápticos oferecem uma dimensão adicional, permitindo que os usuários sintam texturas.",
  },
  {
    title: "Som Totalmente Imersivo",
    text: "A tecnologia de áudio 3D redefine a percepção sonora em ambientes virtuais. Fones de ouvido de última geração proporcionam uma experiência auditiva espacial.",
  },
  {
    title: "Movimentos que Falam",
    text: "A tecnologia de rastreamento de movimento eleva a interação para um novo patamar. Sensores precisos capturam cada movimento do corpo.",
  },
];

const Tecnology = () => {
  return (
    <div className="newview__tecnology section__padding" id="tec">
      <div className="newview__tecnology-heading">
        <h1 className="gradient__text">
          Desbravando o Futuro: Tecnologias Inovadoras em Realidade Virtual
        </h1>
        <p>Solicite Acesso Antecipado para Começar</p>
      </div>
      <div className="newview__tecnology-container">
        {tecnologyData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Tecnology;
