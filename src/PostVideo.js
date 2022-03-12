import IonIcon from "./IonIcon";
import Image from "./Image";
import IconesPost from "./IconesPost";
import Video from "./Video";

export default function PostVideo(){
    const arrayVideo = [
        {
          src: "assets/img/razoesparaacreditar.svg",
          alt: "Imagem",
          texto: "momentourso",
          fotoPerfil: "assets/img/9gag.svg",
          altPerfil: "Imagem Perfil",
          perfil: "9gag",
          curtidoPor: "outras 1504.276 pessoas",
        }
    ]

    const postVideo = arrayVideo.map((info)=>{
        return(
            <div class="post">
                <div class="topo">
                <div class="usuario">
                    <Image src={info.src} alt={info.alt} />
                    {info.texto}
                </div>
                <div class="acoes">
                    <IonIcon name="ellipsis-horizontal" />
                </div>
                </div>

                <div class="conteudo">
                    <Video />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <IconesPost />
                        <div>
                            <IonIcon name="bookmark-outline" />
                        </div>
                    </div>

                    <div class="curtidas">
                        <Image src={info.fotoPerfil} alt={info.altPerfil} />
                        <div class="texto">
                        Curtido por <strong>{info.perfil}</strong> e <strong>{info.curtidoPor}</strong>
                        </div>
                    </div>
                </div>
        </div>
    )})

    return(<div>{postVideo}</div>)
}