import Posts from "./Posts"
import Story from "./Story"

export default function Conteudo(){
    return(
        <div className="corpo">
            <div className="esquerda">
                    <Story />
                    <Posts />
            </div>
            <div className="sidebar"></div>
        </div>
    )
}