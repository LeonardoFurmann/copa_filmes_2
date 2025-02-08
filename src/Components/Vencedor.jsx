import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Titulo } from './Titulo';

const Vecedor = () => {

  const location = useLocation();
  const vencedor = location.state?.vencedor


  return (
    <div className="container-copa">
      <Titulo texto={"E o Vencedor é..."} />
      <div>
        <div className="container-vencedor">
          <div className="movie">
            <h2 className="name-film" id="name_movie">{vencedor.nome}</h2>
            <img src={vencedor.imagem} alt="Vencedor" id="img_movie" className="imagem-filme" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vecedor