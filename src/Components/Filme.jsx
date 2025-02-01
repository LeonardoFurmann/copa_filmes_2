import React from 'react'

const Filme = ({nome, imagem}) => {
    return (
        <div className="movie" data-id="0">
            <img src={imagem} alt="" id="img_movie1" className="filme" />
            <h2 className="name-film" id="name_movie1">{nome}</h2>
        </div>
    )
}

export default Filme