import RenderPalavra from "./RenderPalavra"

const Jogo = () => {

   
    return (
        <div className="image">
            <img src="./img/forca0.png" />
            <div className="escolherpalavra">
                <button>Escolher palavra</button>

                < RenderPalavra />
                
              
            </div>
                
           
        </div>
    )
}

export default Jogo

 {/* <div class="underlines">_ _ _ _ _ _ _ _ _ _</div> */}