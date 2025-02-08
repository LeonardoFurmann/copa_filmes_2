import React, {useContext} from 'react'
import { useLocation } from 'react-router-dom';
import { Titulo } from './Titulo';
import { CopaContext } from '../CopaContext';

const Vencedor = () => {

  const location = useLocation();
  const vencedor = location.state?.vencedor
  const {start} = useContext(CopaContext);

  function startTornament(){
    start();
  }

  return (
    <div className="container-copa">
      <Titulo texto={"E o Vencedor é..."} />
      <div>
        <div className="container-vencedor">
          <div className="movie">
            <h2 className="name-film" id="name_movie">{vencedor.nome}</h2>
            <img src={vencedor.imagem} alt="Vencedor" id="img_movie" className="imagem-filme" />
            <div className="container-btn">
              <button id="btn_start" className="btn-start" onClick={startTornament}>Novo torneio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vencedor