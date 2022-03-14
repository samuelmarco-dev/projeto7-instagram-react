import Esquerda from "./Esquerda";
import DivSidebar from "./Sidebar/DivSidebar";

export default function Conteudo(){
    return(
        <div className="corpo">
            <Esquerda/>
            <DivSidebar />
        </div>
    )
}