export default function Stories(){
    const stories = [
         {imagem: "assets/9gag.svg", usuario: "9gag"},
         {imagem: "assets/meowed.svg", usuario: "meowed"},
         {imagem: "assets/barked.svg", usuario: "barked"},
         {imagem: "assets/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
         {imagem: "assets/wawawicomics.svg", usuario: "wawawicomics"},
         {imagem: "assets/respondeai.svg", usuario: "respondeai"},
         {imagem: "assets/filomoderna.svg", usuario: "filomoderna"},
         {imagem: "assets/memeriagourmet.svg", usuario: "memeriagourmet"},
    ]
    
    return(
        <ul class = "stories">
            {stories.map(story => (
                <li class = "story">
                    <div class="imagem">
                        <img src={story.imagem} alt={story.nome}/>
                    </div>
                    <div class="usuario">
                        {story.usuario}
                    </div>
                </li>
                ))}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
        </ul>
    )
}