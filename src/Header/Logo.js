import IonIcon from "../IonIcon"
import Image from "../Image"

export default function Logo(){
    return(
        <div className="logo">
            <IonIcon name="logo-instagram" />
            <div className="separador"></div>
            <Image src="assets/img/logo.png" alt="Logo Instagram" />
        </div>
    );
}