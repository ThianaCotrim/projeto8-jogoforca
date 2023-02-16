import { useState } from "react"
import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./palavras"

const words = ['betina', 'Catrina', 'Carlinhos']

function App() {

    

  return (
   <div>
    < Jogo />
    < Letras />
    </div>
     
  );
}

export default App;
