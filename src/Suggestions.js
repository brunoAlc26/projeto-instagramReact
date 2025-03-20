export default function Suggestions(){
    const suggestions = [
        {nome: "bad.vibes.memes", imagem: "assets/bad.vibes.memes.svg", razao: "Segue você", seguir: "Seguir"},
        {nome: "chibirdart", imagem: "assets/chibirdart.svg", razao: "Segue você", seguir: "Seguir"},
        {nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg", razao: "Novo no Instagram", seguir: "Seguir"},
        {nome: "adorable_animals", imagem: "assets/adorable_animals.svg", razao: "Segue você", seguir: "Seguir"},
        {nome: "smallcutecats", imagem: "assets/smallcutecats.svg", razao: "Segue você", seguir: "Seguir"}
    ]

   
    return(
        <ul class = "sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(sugestoes => (
            <li class = "sugestoes">
                <div class="sugestoes">

                    <div class="sugestao">
                <div class="usuario">
                <img src={sugestoes.imagem} alt={sugestoes.nome}/>
                <div class="texto">
                    <div class="nome">{sugestoes.nome}</div>
                    <div class="razao">{sugestoes.razao}</div>
                </div>
                </div>

                <div class="seguir">{sugestoes.seguir}</div>
                </div>

                </div>
            </li>
        ))}
        </ul>
    )
}