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
        {posts.map(post => (
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
  