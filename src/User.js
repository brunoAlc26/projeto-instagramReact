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