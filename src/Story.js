import React from "react";

export default function Story({ imagem, usuario }) {
  return (
    <li className="story">
      <div className="imagem">
        <img src={imagem} alt={usuario} />
      </div>
      <div className="usuario">
        {usuario}
      </div>
    </li>
  );
}
