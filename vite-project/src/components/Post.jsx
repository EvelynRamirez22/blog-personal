export function Post({Titulo,link,description,parrafo}){
    return(
        <>
        <h2>{Titulo}</h2>
        <img src={link} alt={description}/>
        <p>{parrafo}</p>
        
        </>
    )
}