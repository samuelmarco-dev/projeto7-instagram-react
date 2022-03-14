import Image from "../../Image";

export default function PerfilUsuario(prop){
    return(
        <div className="usuario">
            <div className="flex">
                <Image src={prop.srcImage} alt={prop.alt}/>
                <div className="texto">
                    <strong>{prop.nickname}</strong>
                {prop.nome}
                </div>
            </div>
        </div>
    )
}