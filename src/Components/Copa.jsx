import React, { useEffect, useState } from 'react'
import Confronto from './Confronto'
import filmesJson from '../db.json'

const Copa = () => {

    const [filmes, setFilmes] = useState(shuffle(filmesJson.filmes));
    const [confrontos, setConfrontos] = useState([]);
    //const [rodadas, setRodadas] = useState(0)

    useEffect(() => {

        if (confrontos.length == 0 ) {

            console.log(filmes)

            const listaConfrontos = filmes.reduce((acumulador, item, index, array) => {
                if (index % 2 === 0) {
                    acumulador.push(
                        {
                            nome_primeiro: item.nome,
                            imagem_primeiro: item.imagem,
                            nome_segundo: array[index + 1].nome,
                            imagem_segundo: array[index + 1].imagem,
                        }
                    )
                }

                return acumulador;

            }, [])

            setConfrontos(listaConfrontos)
            //setRodadas(confrontos.length)        

    }

    }, [filmes]);

    console.log(confrontos)


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    return (
        <div className="container-copa">
            <div className="container-title">
                <h1 className="titulo font-3d">COPA <span className="primary-color ">FILMES</span></h1>
                {/* <h2 id="contador" className="titulo">16 filmes</h2> */}
            </div>

            {confrontos.length > 0 && <Confronto confronto={confrontos[0]}setConfrontos={setConfrontos} /> }

        </div>
    )
}

export default Copa