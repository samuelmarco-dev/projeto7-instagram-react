import IonIcon from "./IonIcon";

export default function Story(){
    const arrayBarraStories = [
        {src:'assets/img/9gag.svg', alt:'Imagem Perfil', texto:'9gag'},
        {src:'assets/img/meowed.svg', alt:'Imagem Perfil', texto:'meowed'},
        {src:'assets/img/barked.svg', alt:'Imagem Perfil', texto:'barked'},
        {src:'assets/img/nathanwpylestrangeplanet.svg', alt:'Imagem Perfil', texto:'nathanwpylestrangeplanet'},
        {src:'assets/img/wawawicomics.svg', alt:'Imagem Perfil', texto:'wawawicomics'},
        {src:'assets/img/respondeai.svg', alt:'Imagem Perfil', texto:'respondeai'},
        {src:'assets/img/filomoderna.svg', alt:'Imagem Perfil', texto:'filomoderna'},
        {src:'assets/img/memeriagourmet.svg', alt:'Imagem Perfil', texto:'memeriagourmet'}
    ];
    const story = arrayBarraStories.map((infos)=>{
        return(
        <div className="story">
        <div className="imagem">
            <img src={infos.src} alt={infos.alt} />
        </div>
        <div className="usuario">
            {infos.texto}
        </div>
        </div>
    )});

    return(
    <div className="stories">
        {story}
        <div class="setinha">
              <IonIcon name="chevron-forward-circle" />
            </div>
    </div>);
}