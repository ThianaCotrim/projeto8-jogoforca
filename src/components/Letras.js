
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
                        {alfabetomaiusculo.map((l) => (
                        <button class={`box ${props.tentativaLetra.includes(l) && "desabilitado"} ${props.habilitarLetra}`}
                        onClick={() => {props.palavra(l)}}>{l} </button>))}
                    </div>
                </div>
            </div>
        )
}


export default Letras
