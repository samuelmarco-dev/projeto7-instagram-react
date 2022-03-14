import Image from "../../Image";

export default function CurtidasPost(prop){
    return(
        <div class="curtidas">
          <Image src={prop.fotoPerfil} alt={prop.alt} />
          <div class="texto">
            Curtido por <strong>{prop.perfil}</strong> e <strong>{prop.curtidoPor}</strong>
          </div>
        </div>
    )
}