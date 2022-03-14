import Image from "../../Image"

export default function ConteudoPost(prop){
    return(
        <div class="conteudo">
          <Image src={prop.src} alt={prop.alt} />
        </div>
    )
}