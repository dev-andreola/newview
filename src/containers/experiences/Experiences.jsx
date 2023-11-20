import React from "react";
import "./experiences.css";
import Feature from "../../components/feature/Feature";

const Experiences = () => {
  return (
    <div className="newview__exp section__margin" id="exp">
      <div className="newview__exp-feature">
        <Feature
          title="Imersão"
          text="Descreve a sensação de total absorção em um ambiente virtual, onde os usuários se sentem completamente envolvidos na experiência. Mergulhe em narrativas envolventes e interativas que transcendem os limites da realidade."
        />
      </div>
      <div className="newview__exp-heading">
        <h1 className="gradient__text">
          Experiências VR transportam você para além dos limites do comum.
        </h1>
        <p>Explore a Biblioteca</p>
      </div>
      <div className="newview__exp-container">
        <Feature
          title="Educação"
          text="Proporciona aprendizado imersivo, levando os alunos a experiências práticas e vívidas. De visitas virtuais a aulas interativas, a VR transforma a educação, tornando-a envolvente e memorável."
        />
        <Feature
          title="Turismo"
          text="Descubra destinos antes de viajar, com passeios virtuais e experiências autênticas que transformam a maneira como exploramos o turismo."
        />
        <Feature
          title="Jogos"
          text="Ao colocar os jogadores dentro do jogo, cria-se uma experiência envolvente e interativa, redefinindo a forma como experimentamos a diversão digital."
        />
      </div>
    </div>
  );
};

export default Experiences;
