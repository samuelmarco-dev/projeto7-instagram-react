import Image from "./Image";
import LinkSidebar from "./LinkSidebar";
import Copyright from "./Copyright";
import TopoSugestoes from "./TopoSugestoes";
import PerfilUsuario from "./PerfilUsuario";

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

    const sugestoesParaSeguir = arraySugestoes.map((sugestao)=>{
        return(
            <div class="sugestao">
              <div class="usuario">
                  <Image src={sugestao.srcImg} alt={sugestao.alt} />
                <div class="texto">
                  <div class="nome">{sugestao.nome}</div>
                  <div class="razao">{sugestao.info}</div>
                </div>
              </div>
              <div class="seguir">Seguir</div>
            </div>
        )
    })

    return(
    <div className="sidebar">
        <PerfilUsuario />
        <div className="sugestoes">
            <TopoSugestoes />
            {sugestoesParaSeguir}
        </div>
        <LinkSidebar />
        <Copyright />
    </div>)
}