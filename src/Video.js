export default function Video(){
    return(
        <div>
            <video controls muted autoplay loop preload="auto" poster="assets/video/pandaVideo.jpg">
                    <source src="assets/video/pandaVideo.mp4" type="video/mp4"></source>
                    <source src="assets/video/pandaVideo.ogv" type="video/ovg"></source>
                    <object>
                        <embed src="demo.mp4" type="application/x-shockwave-flash" 
                        allowfullscreen="false" allowscriptaccess="always" />  		
                    </object>
                    Formato não suportado  
            </video>
        </div>
    )
}