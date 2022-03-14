import LinkSidebar from "./LinkSidebar";
import Copyright from "./Copyright";
import TopoSugestoes from "./TopoSugestoes";
import PerfilUsuario from "./PerfilUsuario";
import DivSeguir from "./DivSeguir"
import SugestaoUsuario from "./SugestaoUsuario";

export default function Sidebar(){
    
    const arraySugestoes = [
        {
            srcImg: "assets/img/bad.vibes.memes.svg", 
            alt: "Imagem", 
            nome: "bad.vibes.memes", 
            info: "Segue você"
        },
        {
            srcImg: "assets/img/chibirdart.svg", 
            alt: "Imagem", 
            nome: "chibirdart", 
            info: "Segue você"
        },
        {
            srcImg: "assets/img/razoesparaacreditar.svg", 
            alt: "Imagem", 
            nome: "razoesparaacreditar", 
            info: "Novo no Instagram"
        },
        {
            srcImg: "assets/img/adorable_animals.svg", 
            alt: "Imagem", 
            nome: "adorable_animals", 
            info: "Segue você"
        },
        {
            srcImg: "assets/img/smallcutecats.svg", 
            alt: "Imagem", 
            nome: "smallcutecats", 
            info: "Segue você"
        }
    ]
    const arrayUsuarioSidebar =
        {
        srcImage:"assets/img/catanacomics.svg", 
        alt:"Imagem do Usuário", 
        nickname:"catanacomics", 
        nome:"Catana"
    };

    const sugestoesParaSeguir = arraySugestoes.map((sugestao)=>{
        return(
            <div className="sugestao">
                <SugestaoUsuario srcImg={sugestao.srcImg} alt={sugestao.alt}
                nome={sugestao.nome} info={sugestao.info}/>
                <DivSeguir />
            </div>
        )
    })

    const {srcImage: src, alt, nickname: user, nome: name} = arrayUsuarioSidebar;

    return(
    <div className="sidebar">
        <PerfilUsuario srcImage={src} alt={alt} nickname={user} nome={name}/>
        <div className="sugestoes">
            <TopoSugestoes titulo="Sugestões para você" opcao="Ver tudo"/>
            {sugestoesParaSeguir}
        </div>
        <LinkSidebar />
        <Copyright />
    </div>)
}