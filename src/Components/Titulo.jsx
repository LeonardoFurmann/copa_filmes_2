import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Titulo = ({ texto }) => {
  const navigate = useNavigate();

  function handleClick(){
    console.log('clicou')
    navigate('/')
  }

  return (
    <div className="container-title">
      <h1 className="titulo font-3d pointer" onClick={handleClick} >COPA <span className="primary-color ">FILMES</span></h1>
      <p className="rodada">{texto}</p>
    </div>
  )
}
