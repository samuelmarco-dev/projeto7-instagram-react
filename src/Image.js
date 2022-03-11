export default function Image(prop){
    return(
        <div>
            <img src={prop.src} alt={prop.alt}/>
        </div>
    )
}