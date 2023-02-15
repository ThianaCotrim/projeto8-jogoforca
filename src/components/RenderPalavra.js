const RenderPalavra = () => {

    const word = 'teste'
 
    return (
 
        <div className="wor"> {word.split('').map((word, index) => (
         

            <span>{word}</span>
        ))}     
        </div>
    )   
}
export default RenderPalavra