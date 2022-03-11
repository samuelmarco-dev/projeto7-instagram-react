import Story from "./Story"

export default function Conteudo(){
    return(
        <div className="corpo">
            <div className="esquerda">
                    <Story />
                <div className="posts"></div>
            </div>
            <div className="sidebar"></div>
        </div>
    )
}