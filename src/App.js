import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"

import image0 from "./images/forca0.png"
import image1 from "./images/forca1.png"
import image2 from "./images/forca2.png"
import image3 from "./images/forca3.png"
import image4 from "./images/forca4.png"
import image5 from "./images/forca5.png"
import image6 from "./images/forca6.png"

function App() {
  
  const [habilitarLetra, setHabilitarLetra] = useState("desabilitado")
  const [imagem, setImagem] = useState("none")
  const [renderizarPalavra, setRenderizarPalavra] = useState([])
  const [desativarPalavra, setDesativarPalavra] = useState(false)
  const [tentativaLetra, setTentativaLetra] = useState([])
  const [jogoComeca, setJogoComeca] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [mostrarPalavra, setMostrarPalavra] = useState([])
  const [disabled, setDisabled] = useState (true)
  const [cor, setCor] = useState ("letrinhas")

  const images = [image0, image1, image2, image3, image4, image5, image6]

  let tracinho = [];
  let letraQualquer = "";
  
  const comecarJogo = () => {

    desabilitarLetra()
    palavraEscolhida()
    desativado()
    imagens()
    setJogoComeca(1)
    setDisabled(false)
    setCor ("letrinhas")
    setHabilitarLetra ("habilitado")
    setResultado(0)
    setJogoComeca(0)
    setTentativaLetra([])
  }

  const desabilitarLetra = () => {

    if (jogoComeca === 1) {
      setHabilitarLetra("")
    }
    setHabilitarLetra("habilitado")
  }

  const desativado = () => {
    setDesativarPalavra(true)
  }

  const imagens = () => {
    setImagem("")
  }

  const palavraEscolhida = () => {
    const novoRenderizarPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setRenderizarPalavra(novoRenderizarPalavra.split(''))

    tracinho = Array(novoRenderizarPalavra.length).fill('_')
    setMostrarPalavra(tracinho) 
  }

  const palavra = (todasasletras) => {
    console.log(todasasletras)
    let somErro = resultado
    console.log(resultado)
    letraQualquer = todasasletras.toLowerCase();

    const palavraTestada = [...tentativaLetra]
    setTentativaLetra([...palavraTestada, todasasletras])


    for (let i = 0; i < renderizarPalavra.length; i++) {
      const depois = renderizarPalavra[i]

      if (depois.includes(letraQualquer)) {
        mostrarPalavra.splice(i, 1, depois)
        console.log(mostrarPalavra)
      }

      else if (!renderizarPalavra.includes(letraQualquer)) {
        somErro = somarErro()
        
      }
    }

    jogoFinalizado(somErro)
  }

  const somarErro = () => {
    
    const somErro = resultado + 1;
    setResultado(somErro);
    return somErro;
  }

  const jogoFinalizado = () => {
    if (resultado >= 5) {
      alert("Infelizmente voc?? perdeu, n??o desista, tente novamente!")
      setDisabled(true)
      setCor ("vermelho")
      setMostrarPalavra(renderizarPalavra)

    }
    else if (resultado < 6 && !mostrarPalavra.includes("_")) {
      alert("Parab??ns!!!! Voc?? venceu!!")
      setDisabled(true)
      setCor ("verde")
      
    }
  }

  return (
    <>
      <Jogo comecarJogo={comecarJogo} 
            palavra={palavra} 
            desativarPalavra={desativarPalavra}
            mostrarPalavra={mostrarPalavra} 
            imagem={imagem} 
            renderizarPalavra={renderizarPalavra} 
            images={images} 
            tentativaLetra={tentativaLetra} 
            resultado={resultado} 
            disabled={disabled}
            cor = {cor}
            />

      <Letras habilitarLetra={habilitarLetra} 
              palavra={palavra} 
              tentativaLetra={tentativaLetra} 
              jogoComeca={jogoComeca} 
              resultado={resultado} 
              disabled={disabled}
              setDisabled ={setDisabled}
            />
    </>
  );
}

export default App;
