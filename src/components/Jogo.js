
const Jogo = (props) => {

    return (
        <>
            <div class="jogo">
            <img src={props.images[props.resultado]} class={`${props.imagem}`}></img>
                <button onClick={props.comecarJogo} disabled={props.desativado} class="escolher">Escolher Palavra</button>
            </div>
            <div class="seletorjogo">
            {props.mostrarPalavra.map((x) => ( <div class="letras"> <div class="letrinhas">{x}</div></div> ))}
            </div>
        </>
    )
}

export default Jogo