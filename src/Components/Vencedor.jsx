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
        <div className="container-film">
          <div className="movie" data-id="0">
            <img src={vencedor.imagem} alt="" id="img_movie1" className="filme" />
            <h2 className="name-film" id="name_movie1">{vencedor.nome}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vecedor