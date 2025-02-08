import React from 'react'

const Filme = ({nome, imagem, onClick}) => {
    return (
        <div className="movie" data-id="0">
            <img src={imagem} alt="Imagem do filme" id="img_movie" className="imagem-filme" onClick={onClick} />
            <p className="name-film" id="name_movie">{nome}</p>
        </div>
    )
}

export default Filme