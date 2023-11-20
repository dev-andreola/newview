import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="newview__blog section__padding" id="blog">
    <div className="newview__blog-heading">
      <h1 className="gradient__text">
        Muita coisa está acontecendo, <br /> Estamos blogando sobre isso.
      </h1>
    </div>
    <div className="newview__blog-container">
      <div className="newview__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="03/11/2023"
          text="Avanço Tecnológico: Novo Sensor VR Aumenta Precisão e Interação"
        />
      </div>
      <div className="newview__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="15/10/2023"
          text="Colaboração Virtual: Plataforma Revolucionária para Reuniões Online em VR"
        />
        <Article
          imgUrl={blog03}
          date="28/09/2023"
          text="A Realidade Virtual Chega às Salas de Aula: Educação Inovadora"
        />
        <Article
          imgUrl={blog04}
          date="10/09/2023"
          text="Jogos VR: Lançamentos Prometem Experiências Inéditas"
        />
        <Article
          imgUrl={blog05}
          date="05/08/2023"
          text="Exploração Virtual: Museus e Pontos Turísticos Adotam Tours em VR"
        />
      </div>
    </div>
  </div>
);

export default Blog;
