import Image from "../../Image"

export default function ImgStory(prop){
    return(
        <div className="imagem">
            <Image src={prop.src} alt={prop.alt} />
        </div>
    )
}