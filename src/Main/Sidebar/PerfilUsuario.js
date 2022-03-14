import Image from "../../Image";

export default function PerfilUsuario(prop){
    return(
        <div className="usuario">
            <div className="flex">
                <Image src={prop.srcImage} alt={prop.alt}/>
                <div class="texto">
                    <strong>{prop.nickname}</strong>
                {prop.nome}
                </div>
            </div>
        </div>
    )
}