import ReactDom from "react-dom";
import Navbar from "./Main/Navbar";
import Conteudo from "./Main/Conteudo";
import FooterMobile from "./Footer/FooterMobile";

function IniciarAplicacao(){
    return(
        <div>
            <Navbar />
            <Conteudo />
            <FooterMobile />
        </div>
    );
}

ReactDom.render(<IniciarAplicacao />, document.querySelector('.root'));