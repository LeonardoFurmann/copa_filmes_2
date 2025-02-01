import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function startTornament(){
        navigate('/copa')
    }


  return (
    <div className="container">
        <div>
            <h1 className="titulo font-3d">COPA <span className="primary-color">FILMES</span></h1>
        </div>
        <div className="container-btn">
            <button id="btn_start" className="btn-start" onClick={startTornament} >Começar</button>
            <button id="btn_help" className="btn-help">?</button>
        </div>
    </div>
  )
}

export default Home