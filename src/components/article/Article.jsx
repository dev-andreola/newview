import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <div className="newview__blog-container_article">
    <div className="newview__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="newview__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Leia o Artigo Completo</p>
    </div>
  </div>
);

export default Article;
