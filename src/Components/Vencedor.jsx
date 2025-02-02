import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Vecedor = () => {

  const location = useLocation();
  const vencedor = location.state?.vencedor


  return (
    <div className="container-copa">
       <div className="container-title">
                <h1 className="titulo font-3d">COPA <span className="primary-color ">FILMES</span></h1>               
            </div>
      <div>
        <div className="container-film">
          <div className="movie" data-id="0">
            <img src={vencedor.imagem} alt="" id="img_movie1" className="filme"/>
              <h2 className="name-film" id="name_movie1">{vencedor.nome}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vecedor