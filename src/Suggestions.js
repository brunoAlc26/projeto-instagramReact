export default function Suggestions() {
    const suggestions = [
        { nome: "bad.vibes.memes", imagem: "assets/bad.vibes.memes.svg", razao: "Segue você", seguir: "Seguir" },
        { nome: "chibirdart", imagem: "assets/chibirdart.svg", razao: "Segue você", seguir: "Seguir" },
        { nome: "razoesparaacreditar", imagem: "assets/razoesparaacreditar.svg", razao: "Novo no Instagram", seguir: "Seguir" },
        { nome: "adorable_animals", imagem: "assets/adorable_animals.svg", razao: "Segue você", seguir: "Seguir" },
        { nome: "smallcutecats", imagem: "assets/smallcutecats.svg", razao: "Segue você", seguir: "Seguir" }
    ];

    return (
        <ul className="suggestions">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((suggestion, index) => (
                <li className="suggestion" key={index}>
                    <div className="usuario">
                        <img src={suggestion.imagem} alt={suggestion.nome} />
                        <div className="texto">
                            <div className="nome">{suggestion.nome}</div>
                            <div className="razao">{suggestion.razao}</div>
                        </div>
                    </div>
                    <div className="seguir">{suggestion.seguir}</div>
                </li>
            ))}
        </ul>
    );
}
