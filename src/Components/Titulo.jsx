import React from 'react'

export const Titulo = ({texto}) => {
  return (
    <div className="container-title">
        <h1 className="titulo font-3d">COPA <span className="primary-color ">FILMES</span></h1>
        <p className="rodada">{texto}</p>
      </div>
  )
}
