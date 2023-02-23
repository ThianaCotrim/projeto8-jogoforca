
const Jogo = (props) => {

    return (
        <>
            <div class="game">
                <img src="./imagem/forca0.png"></img>
                <button class="escolher" onClick={props.ComecarJogo}>Escolher Palavra</button>
            </div>
            <div class="seletorjogo">
                <div class="letter-game"> <div class="letras"></div></div>
            </div>
        </>
    )
}

export default Jogo