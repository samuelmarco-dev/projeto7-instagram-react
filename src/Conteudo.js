import Posts from "./Posts";
import Story from "./Story";
import Sidebar from "./Sidebar";

export default function Conteudo(){
    return(
        <div className="corpo">
            <div className="esquerda">
                <Story />
                <Posts />
            </div>
            <Sidebar /> 
        </div>
    )
}