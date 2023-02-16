import React from "react";
import palavras from "../palavras"
import { useState } from "react";



const alfabeto = [ "a", "b", "c", "d", "e", "f", "g", 
    "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", 
    "y", "z"
            ]




const RenderPalavra = () => {

    const word = 'caminhao'
    var resultado = word.split("");


    const gess = ['a', 'c', 'h', 'u']

    
    console.log(resultado)
   

  
    return (
        
        <div className="word"> {resultado.map((e) => (
            <span style={{ visibility: gess.includes(e) ? 'visible' : "hidden"}}>{e}</span>

        ))}</div>
       
    )   
}
export default RenderPalavra