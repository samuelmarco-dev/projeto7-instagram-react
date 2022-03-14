import Image from "../../Image"
import IonIcon from "../../IonIcon"

export default function TopoPost(prop){
    return(
        <div className="topo">
          <div className="usuario">
            <Image src={prop.src} alt={prop.alt} />
            {prop.texto}
          </div>
          <div className="acoes">
            <IonIcon name="ellipsis-horizontal" />
          </div>
        </div>
    )
}