import React from 'react'

const Filme = ({nome, imagem, onClick}) => {
    return (
        <div className="movie" data-id="0">
            <img src={imagem} alt="Imagem do filme" id="img_movie1" className="filme" onClick={onClick} />
            <p className="name-film" id="name_movie1">{nome}</p>
        </div>
    )
}

export default Filme