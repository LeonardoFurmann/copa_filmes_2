import React from 'react'
import Filme from './Filme'

const Confronto = ({confronto, setConfrontos}) => {
   
    //console.log(confronto)
   
    return (
        <div className="container-movies">
            <div className="container-film">
                <Filme nome={confronto.nome_primeiro} imagem={confronto.imagem_primeiro}/>
                <div className="container-vs">
                    <h1 className="titulo">VS</h1>
                </div>
                <Filme nome={confronto.nome_segundo} imagem={confronto.imagem_segundo}/>
            </div>
        </div>
    )
}

export default Confronto