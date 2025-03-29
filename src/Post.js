import React, { useState } from "react";

export default function Post({ post, index, apertarLike, apertarLikeImagem, apertarSalvar }) {
  return (
    <li className="post">
      <div className="topo">
        <div className="usuario">
          <img src={post.usuario} alt={post.nome} />
          {post.nome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={post.imagem} onClick={() => apertarLikeImagem(index)} alt="post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={() => apertarLike(index)}
              name={post.icon}
              style={{ color: post.color, cursor: "pointer" }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() => apertarSalvar(index)}
              name={post.bookmarkIcon}
              style={{ color: post.bookmarkColor, cursor: "pointer" }}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={post.curtidoTambem_imagem} alt={post.curtidoTambem_nome} />
          <div className="texto">
            Curtido por <strong>{post.curtidoTambem_nome}</strong> e <strong>outras {post.curtidas.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </li>
  );
}
