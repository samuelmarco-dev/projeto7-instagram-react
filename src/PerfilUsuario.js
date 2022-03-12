import Image from "./Image";

export default function PerfilUsuario(){
    const arrayUsuarioSidebar = [
        {
        srcImage:"assets/img/catanacomics.svg", 
        alt:"Imagem do Usuário", 
        nickname:"catanacomics", 
        nome:"Catana"
    }];

    const informacoesUsuario = arrayUsuarioSidebar.map((info)=>{
        return(
            <div className="flex">
                <Image src={info.srcImage} alt={info.alt}/>
                <div class="texto">
                    <strong>{info.nickname}</strong>
                {info.nome}
                </div>
            </div>
        )
    })

    return(
        <div className="usuario">
            {informacoesUsuario}
        </div>
    )
}