import React from "react";

export default function User(){
   
    const [nome, setNome] = React.useState("catanacomic");
    function inserirNome(){
        let novoNome = prompt("Qual é o nome que deseja colocar?");

        if(novoNome === ""){
            return;
        }
        else{
            setNome(novoNome);
        }

    }

    // links de teste
    // https://preview.redd.it/what-is-your-favorite-detailed-spongebob-frame-v0-poiquatfzxoc1.jpeg?auto=webp&s=ba98e234c9ae6f96bce797757e417b4cf7c6d666
    const [imagem, setImagem] = React.useState("assets/catanacomics.svg")
    function inserirImagem(){
        let novaImagem = prompt("Coloque o link da imagem aqui")
        if(novaImagem === ""){
            return
        }
        else{
            setImagem(novaImagem)
        }
    }


    return(
        <div class="usuario">
        <img src={imagem} onClick={inserirImagem} alt="imagem de perfil"/>
        <div class="texto">
            <span>
            <strong>{! nome ? `${nome}` : `${nome}`}</strong>
            <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
        </div>
        </div>
    )
}