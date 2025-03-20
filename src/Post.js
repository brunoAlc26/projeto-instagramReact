// export default function Posts(){
//    const postsa = [
//             { usuario: "assets/meowed.svg", nome: "meowed", imagem: "assets/gato-telefone.svg"  }
//         ]
   
//     return(
//         <ul class="posts">
//             {postsa.map(post => <li class="post">
//                 <p>{post.nome}</p>
//                 <img src={post.usuario} />
//                 <img src={post.imagem} />
//             </li>)}
//         </ul>

        


//         // <div class="posts">
//         //     <div class="post">
//         //         <div class="topo">
//         //         <div class="usuario">
//         //             <img src="assets/meowed.svg" alt="meowed"/>
//         //             meowed
//         //         </div>
//         //         <div class="acoes">
//         //             <ion-icon name="ellipsis-horizontal"></ion-icon>
//         //         </div>
//         //         </div>

//         //         <div class="conteudo">
//         //         <img src="assets/gato-telefone.svg" alt="gato-telefone"/>
//         //         </div>

//         //         <div class="fundo">
//         //         <div class="acoes">
//         //             <div>
//         //             <ion-icon name="heart-outline"></ion-icon>
//         //             <ion-icon name="chatbubble-outline"></ion-icon>
//         //             <ion-icon name="paper-plane-outline"></ion-icon>
//         //             </div>
//         //             <div>
//         //             <ion-icon name="bookmark-outline"></ion-icon>
//         //             </div>
//         //         </div>

//         //         <div class="curtidas">
//         //             <img src="assets/respondeai.svg" alt="respondeai"/>
//         //             <div class="texto">
//         //             Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
//         //             </div>
//         //         </div>
//         //         </div>
//         //     </div>

//         //     <div class="post">
//         //         <div class="topo">
//         //         <div class="usuario">
//         //             <img src="assets/petLove.jpg" alt="petLove"/>
//         //             petLove
//         //         </div>
//         //         <div class="acoes">
//         //             <ion-icon name="ellipsis-horizontal"></ion-icon>
//         //         </div>
//         //         </div>

//         //         <div class="conteudo">
//         //         <img src="assets/pug-2.jpg" alt="gato-telefone"/>
//         //         </div>

//         //         <div class="fundo">
//         //         <div class="acoes">
//         //             <div>
//         //             <ion-icon name="heart-outline"></ion-icon>
//         //             <ion-icon name="chatbubble-outline"></ion-icon>
//         //             <ion-icon name="paper-plane-outline"></ion-icon>
//         //             </div>
//         //             <div>
//         //             <ion-icon name="bookmark-outline"></ion-icon>
//         //             </div>
//         //         </div>

//         //         <div class="curtidas">
//         //             <img src="assets/respondeai.svg" alt="respondeai"/>
//         //             <div class="texto">
//         //             Curtido por <strong>respondeai</strong> e <strong>outras 79.042 pessoas</strong>
//         //             </div>
//         //         </div>
//         //         </div>
//         //     </div>

//         //     <div class="post">
//         //         <div class="topo">
//         //         <div class="usuario">
//         //             <img src="assets/barked.svg" alt="barked"/>
//         //             barked
//         //         </div>
//         //         <div class="acoes">
//         //             <ion-icon name="ellipsis-horizontal"></ion-icon>
//         //         </div>
//         //         </div>

//         //         <div class="conteudo">
//         //         <img src="assets/dog.svg" alt="dog" />
//         //         </div>

//         //         <div class="fundo">
//         //         <div class="acoes">
//         //             <div>
//         //             <ion-icon name="heart-outline"></ion-icon>
//         //             <ion-icon name="chatbubble-outline"></ion-icon>
//         //             <ion-icon name="paper-plane-outline"></ion-icon>
//         //             </div>
//         //             <div>
//         //             <ion-icon name="bookmark-outline"></ion-icon>
//         //             </div>
//         //         </div>

//         //         <div class="curtidas">
//         //             <img src="assets/adorable_animals.svg" alt="adorable_animals"/>
//         //             <div class="texto">
//         //             Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
//         //             </div>
//         //         </div>
//         //         </div>
//         //     </div>
//         // </div>
//     )
// }

export default function Posts() {
    const posts = [
      { 
        usuario: "assets/meowed.svg", 
        nome: "meowed", 
        imagem: "assets/gato-telefone.svg",
        curtidas: "101.523",
        curtidoTambem_imagem: "assets/respondeai.svg",
        curtidoTambem_nome: "respondeai"
      },
      {
        usuario: "assets/petLove.jpg",
        nome: "petLove",
        imagem: "assets/pug-2.jpg",
        curtidas: "79.042",
        urtidoTambem_imagem: "assets/adorable_animals.svg",
        curtidoTambem_nome: "adorable_animals"
      },
      {
        usuario: "assets/barked.svg",
        nome: "barked",
        imagem: "assets/dog.svg",
        curtidas: "99.159",
        urtidoTambem_imagem: "assets/adorable_animals.svg",
        curtidoTambem_nome: "adorable_animals"
      }
    ];
  
    return (
      <ul class="posts">
        {posts.map((post) => (
          <li class="post">
            <div class="topo">
              <div class="usuario">
                <img src={post.usuario} alt={post.nome} />
                {post.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
  
            <div class="conteudo">
              <img src={post.imagem} alt="post" />
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
  
              <div class="curtidas">
                <img src={post.urtidoTambem_imagem} alt="respondeai" />
                <div class="texto">
                  Curtido por <strong>{post.curtidoTambem_nome}</strong> e <strong>outras {post.curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  