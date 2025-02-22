import React, { useContext, useEffect } from 'react'
import { CopaContext } from '../CopaContext';

const Home = () => {
    const {start, setStarted} = useContext(CopaContext);

    useEffect(() => {
        setStarted(false);
    }, [])

    function startTornament(){
        start();
    }

  return (
    <div className="container">
        <div className='text-center'>
            <h1 className="titulo font-3d">COPA <span className="primary-color">FILMES</span></h1>
        </div>
        <div className="container-btn">
            <button id="btn_start" className="btn-start" onClick={startTornament} >Começar</button>
            {/* <button id="btn_help" className="btn-help">?</button> */}
        </div>
        <p className='version'>Versão: 1.0.2</p>
    </div>
  )
}

export default Home