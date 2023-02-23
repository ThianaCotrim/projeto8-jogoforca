import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"

function App() {
 
  const [habilitarLetra, setHabilitarLetra] = useState("desabilitado")
 
  const ComecarJogo = () => {

    DesabilitarLetra()
  }

  const DesabilitarLetra = () =>{

    setHabilitarLetra("habilitado")
  }

  return (
    <>
      <Jogo ComecarJogo={ComecarJogo}/>
      <Letras habilitarLetra={habilitarLetra}/>
    </>
  );
}

export default App;
