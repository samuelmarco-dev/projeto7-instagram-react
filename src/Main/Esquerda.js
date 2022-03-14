import Story from "./Story/Story"
import Posts from "./Post/Posts"

export default function Esquerda(){
    return(
        <div className="esquerda">
            <Story />
            <Posts />
        </div>
    )
}