import Logo from "../Header/Logo";
import LogoMobile from "../Header/LogoMobile";
import Pesquisa from "../Header/Pesquisa";
import InstagramMobile from "../Header/InstagramMobile"; 
import Icones from "../Header/Icones";
import IconesMobile from "../Header/IconesMobile";

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
        </div>
    );
}