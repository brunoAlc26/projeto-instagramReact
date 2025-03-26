export default function Suggestions() {
    const suggestions = [
        { nome: "bad.vibes.memes", imagem: "assets/bad.vibes.memes.svg", razao: "Segue você", seguir: "Seguir" },
        { nome: "chibirdart", imagem: "assets/chibirdart.svg", razao: "Segue você", seguir: "Seguir" },
        { nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg", razao: "Novo no Instagram", seguir: "Seguir" },
        { nome: "adorable_animals", imagem: "assets/adorable_animals.svg", razao: "Segue você", seguir: "Seguir" },
        { nome: "smallcutecats", imagem: "assets/smallcutecats.svg", razao: "Segue você", seguir: "Seguir" }
    ]


    return (
        <ul class="suggestions">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map(suggestions => (
                <li class="suggestions">
                    <div class="suggestions">
                        <div class="suggestion">
                            <div class="usuario">
                                <img src={suggestions.imagem} alt={suggestions.nome} />
                                <div class="texto">
                                    <div class="nome">{suggestions.nome}</div>
                                    <div class="razao">{suggestions.razao}</div>
                                </div>
                            </div>
                            <div class="seguir">{suggestions.seguir}</div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}