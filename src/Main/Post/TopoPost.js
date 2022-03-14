import Image from "../../Image"
import IonIcon from "../../IonIcon"

export default function TopoPost(prop){
    return(
        <div class="topo">
          <div class="usuario">
            <Image src={prop.src} alt={prop.alt} />
            {prop.texto}
          </div>
          <div class="acoes">
            <IonIcon name="ellipsis-horizontal" />
          </div>
        </div>
    )
}