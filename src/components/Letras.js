
    const Letras = (props) => {

        const alfabeto = [ "a", "b", "c", "d", "e", "f", "g", 
        "h", "i", "j", "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", "u", "v", "w", "x", 
        "y", "z"
        ]

        const alfabetomaiusculo= alfabeto.map(letra => letra.toUpperCase());

        return (
            <div >
                <div class="container">
                    <div class="let">
                        {alfabetomaiusculo.map((l) => {
                          return (
                            < RenderizarBotao 
                            habilitarLetra={props.habilitarLetra}
                            tentativaLetra= {props.tentativaLetra}
                            setDisabled = {props.setDisabled}
                            disabled = {props.tentativaLetra.includes(l) ? true : props.disabled}
                            l = {l}
                            palavra={props.palavra}
                            />
                        )})}
                    </div>
                </div>
            </div>
        )
}


const RenderizarBotao = (props) => {
    return (
        <button data-test="letter" class={`box ${props.tentativaLetra.includes(props.l) ? "desabilitado":"disabled"} 
        ${props.habilitarLetra}`}
        onClick={() => {
            props.palavra(props.l)
        }}
        disabled = {props.disabled}>{props.l} 
        </button>
    )
}


export default Letras


