import Image from "../../Image";

export default function CurtidasPost(prop){
    return(
        <div className="curtidas">
          <Image src={prop.fotoPerfil} alt={prop.alt} />
          <div className="texto">
            Curtido por <strong>{prop.perfil}</strong> e <strong>{prop.curtidoPor}</strong>
          </div>
        </div>
    )
}