import Image from "../../Image"

export default function SugestaoUsuario(prop){
    return(
        <div className="usuario">
                <Image src={prop.srcImg} alt={prop.alt} />
            <div class="texto">
                <div className="nome">{prop.nome}</div>
                <div className="razao">{prop.info}</div>
            </div>
        </div>
    )
}