import PostVideo from "./PostVideo";
import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";
import AcoesPost from "./AcoesPost";
import CurtidasPost from "./CurtidasPost";

export default function Posts()
{
    const arrayPost = [
    {
      src: "assets/img/meowed.svg",
      alt: "Imagem Perfil",
      texto: "meowed",
      imgConteudo: "assets/img/gato-telefone.svg",
      altConteudo: "Imagem Posts",
      fotoPerfil: "assets/img/respondeai.svg",
      altPerfil: "Imagem Perfil",
      perfil: "respondeai",
      curtidoPor: "outras 101.523 pessoas",
    },
    {
      src: "assets/img/barked.svg",
      alt: "Imagem Perfil",
      texto: "barked",
      imgConteudo: "assets/img/dog.svg",
      altConteudo: "Imagem Posts",
      fotoPerfil: "assets/img/adorable_animals.svg",
      altPerfil: "Imagem Perfil",
      perfil: "adorable_animals",
      curtidoPor: "outras 99.159 pessoas",
    },
  ];

  const post = arrayPost.map((postagem)=>{
    return(
      <div className="post">
        <TopoPost src={postagem.src} alt={postagem.alt} texto={postagem.texto} />
        <ConteudoPost src={postagem.imgConteudo} alt={postagem.altConteudo} />

      <div className="fundo">
        <AcoesPost/>
        <CurtidasPost fotoPerfil={postagem.fotoPerfil} alt={postagem.altPerfil} 
        perfil={postagem.perfil} curtidoPor={postagem.curtidoPor} />
      </div>
    
    </div>
    )
  })

  return(
    <div className="posts">
      {post}
      <PostVideo />
    </div>
  )
}
