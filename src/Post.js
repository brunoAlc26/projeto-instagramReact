import React, { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    { 
      usuario: "assets/meowed.svg", 
      nome: "meowed", 
      imagem: "assets/gato-telefone.svg",
      curtidas: 101523,
      curtidoTambem_imagem: "assets/respondeai.svg",
      curtidoTambem_nome: "respondeai",
      like: false,
      icon: "heart-outline",
      color: "black",
      bookmarkIcon: "bookmark-outline",
      bookmarkColor: "black"
    },
    {
      usuario: "assets/petLove.jpg",
      nome: "petLove",
      imagem: "assets/pug-2.jpg",
      curtidas: 79042,
      curtidoTambem_imagem: "assets/adorable_animals.svg",
      curtidoTambem_nome: "adorable_animals",
      like: false,
      icon: "heart-outline",
      color: "black",
      bookmarkIcon: "bookmark-outline",
      bookmarkColor: "black"
    },
    {
      usuario: "assets/barked.svg",
      nome: "barked",
      imagem: "assets/dog.svg",
      curtidas: 99159,
      curtidoTambem_imagem: "assets/adorable_animals.svg",
      curtidoTambem_nome: "adorable_animals",
      like: false,
      icon: "heart-outline",
      color: "black",
      bookmarkIcon: "bookmark-outline",
      bookmarkColor: "black"
    }
  ]);

  function apertarLike(i) {
    const post = [...posts];

    if (!post[i].like) { 
      post[i].like = true;
      post[i].curtidas += 1;
      post[i].icon = "heart";
      post[i].color = "red";
    } else { 
      post[i].like = false;
      post[i].curtidas -= 1;
      post[i].icon = "heart-outline";
      post[i].color = "black";
    }

    setPosts(post);
  }

  function apertarLikeImagem(i) {
    if (!posts[i].like) {
      apertarLike(i);
    }
  }

  function apertarSalvar(i) {
    const post = [...posts];

    if (post[i].bookmarkIcon === "bookmark-outline") {
      post[i].bookmarkIcon = "bookmark";
      post[i].bookmarkColor = "black";
    } else {
      post[i].bookmarkIcon = "bookmark-outline";
      post[i].bookmarkColor = "black";
    }

    setPosts(post);
  }

  return (
    <ul className="posts">
      {posts.map((post, i) => (
        <li className="post" key={i}>
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
            <img src={post.imagem} onClick={() => apertarLikeImagem(i)} alt="post" />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon 
                  onClick={() => apertarLike(i)} 
                  name={post.icon} 
                  style={{ color: post.color, cursor: "pointer" }}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon 
                  onClick={() => apertarSalvar(i)} 
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
      ))}
    </ul>
  );
}
