import Image from "./Image";
import IonIcon from "./IonIcon";
import IconesPost from "./IconesPost";
import PostVideo from "./PostVideo";

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
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <Image src={postagem.src} alt={postagem.alt} />
            {postagem.texto}
          </div>
          <div class="acoes">
            <IonIcon name="ellipsis-horizontal" />
          </div>
        </div>

        <div class="conteudo">
          <Image src={postagem.imgConteudo} alt={postagem.altConteudo} />
        </div>

      <div class="fundo">
        <div class="acoes">
          <IconesPost />
          <div>
            <IonIcon name="bookmark-outline" />
          </div>
        </div>

        <div class="curtidas">
          <Image src={postagem.fotoPerfil} alt={postagem.altPerfil} />
          <div class="texto">
            Curtido por <strong>{postagem.perfil}</strong> e <strong>{postagem.curtidoPor}</strong>
          </div>
        </div>
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
