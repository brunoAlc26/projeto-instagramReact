import React from "react";

export default function Suggestion({ imagem, nome, razao }) {
  return (
    <li className="suggestion">
      <div className="usuario">
        <img src={imagem} alt={nome} />
        <div className="texto">
          <div className="nome">{nome}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>
      <button className="seguir">Seguir</button>
    </li>
  );
}
