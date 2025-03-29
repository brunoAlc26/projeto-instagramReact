import React, { useState } from "react";
import Post from "./Post"; // Importando o componente Post

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    post[i].like = !post[i].like;
    post[i].curtidas += post[i].like ? 1 : -1;
    post[i].icon = post[i].like ? "heart" : "heart-outline";
    post[i].color = post[i].like ? "red" : "black";
    setPosts(post);
  }

  function apertarLikeImagem(i) {
    if (!posts[i].like) {
      apertarLike(i);
    }
  }

  function apertarSalvar(i) {
    const post = [...posts];
    post[i].bookmarkIcon = post[i].bookmarkIcon === "bookmark-outline" ? "bookmark" : "bookmark-outline";
    post[i].bookmarkColor = post[i].bookmarkIcon === "bookmark" ? "black" : "black";
    setPosts(post);
  }

  return (
    <ul className="posts">
      {posts.map((post, i) => (
        <Post
          key={post.id} // Agora usando um ID único
          post={post}
          index={i}
          apertarLike={apertarLike}
          apertarLikeImagem={apertarLikeImagem}
          apertarSalvar={apertarSalvar}
        />
      ))}
    </ul>
  );
}
