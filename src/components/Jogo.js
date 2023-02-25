
const Jogo = (props) => {

    return (
        <>
            <div class="jogo">
            <img src={props.images[props.resultado]} class={`${props.imagem}`} data-test="game-image"></img>
                <button data-test="choose-word" onClick={props.comecarJogo} disabled={props.desativado} class="escolher">Escolher Palavra</button>
            </div>
            <div data-test="word" class="seletorjogo">
            {props.mostrarPalavra.map((x) => ( <div class="letras"><div class={`letrinhas ${props.cor}`}>{x}</div></div> ))}
            
            </div>
        </>
    )
}

export default Jogo