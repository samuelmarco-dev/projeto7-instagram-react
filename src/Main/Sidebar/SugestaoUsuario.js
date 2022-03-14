import Image from "../../Image"

export default function SugestaoUsuario(prop){
    return(
        <div class="usuario">
                <Image src={prop.srcImg} alt={prop.alt} />
            <div class="texto">
                <div class="nome">{prop.nome}</div>
                <div class="razao">{prop.info}</div>
            </div>
        </div>
    )
}