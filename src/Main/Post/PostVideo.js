import TopoPost from "./TopoPost";
import ConteudoPostVideo from "./ConteudoPostVideo";
import AcoesPost from "./AcoesPost";
import CurtidasPost from "./CurtidasPost";

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
            <div className="post">
                <TopoPost src={info.src} alt={info.alt} texto={info.texto} />
                <ConteudoPostVideo />

                <div className="fundo">
                    <AcoesPost />
                    <CurtidasPost fotoPerfil={info.fotoPerfil} alt={info.altPerfil} 
                    perfil={info.perfil} curtidoPor={info.curtidoPor}/>
                </div>

            </div>
    )})

    return(<div className="margin">{postVideo}</div>)
}