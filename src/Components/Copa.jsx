import React, { useEffect, useState } from 'react'
import Confronto from './Confronto'
import Filme from './Filme'
import filmesJson from '../db.json'
import { useNavigate } from 'react-router-dom';

const Copa = () => {
    const navigate = useNavigate();
    const [filmes, setFilmes] = useState(shuffle(filmesJson.filmes));
    const [confrontos, setConfrontos] = useState([]);
    const [vencedores, setVencedores] = useState([]);
    const [indiceConfrontoAtual, setIndiceConfrontoAtual] = useState(0);
    const [rodadaAtual, setRodadaAtual] = useState(1)

    useEffect(() => {
        //console.log(filmes)
        iniciarConfrontos(filmes)    
    }, []);

    const iniciarConfrontos = (listaFilmes) => {
        console.log(listaFilmes)
        const listaConfrontos = [];
        for (let i = 0; i < listaFilmes.length; i += 2) {
            listaConfrontos.push([listaFilmes[i], listaFilmes[i + 1]]);
        }

        setConfrontos(listaConfrontos);
        setIndiceConfrontoAtual(0);
    }

    const selecionarVencedor = (vencedor) => {
        setVencedores((prev) => [...prev, vencedor]);
        console.log(vencedores)
        if (indiceConfrontoAtual + 1 < confrontos.length) {
            setIndiceConfrontoAtual((prev) => prev + 1);
        } else {
            if (vencedores.length === 0 && confrontos.length === 1) {
                navigate('/vencedor', { state: { vencedor } });
                // alert(`🏆 O vencedor final é: ${vencedor.nome}`);
            } else{
                iniciarConfrontos([...vencedores, vencedor]);
                setRodadaAtual(prev => prev + 1);
                setVencedores([]);
            }
        }
    }


    function shuffle(array) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    return (
        <div className="container-copa">
            <div className="container-title">
                <h1 className="titulo font-3d">COPA <span className="primary-color ">FILMES</span></h1>
                <h2 className="titulo">{rodadaAtual} rodada</h2>
            </div>

            {confrontos.length > 0 && (
                <div className="container-movies" key={indiceConfrontoAtual}>
                    <div className="container-film">
                        <Filme 
                            nome={confrontos[indiceConfrontoAtual][0].nome}      
                            imagem={confrontos[indiceConfrontoAtual][0].imagem}
                            onClick={() => selecionarVencedor(confrontos[indiceConfrontoAtual][0])}
                        />
                        <div className="container-vs">
                            <h1 className="titulo">VS</h1>
                        </div>
                        <Filme 
                            nome={confrontos[indiceConfrontoAtual][1].nome}      
                            imagem={confrontos[indiceConfrontoAtual][1].imagem}
                            onClick={() => selecionarVencedor(confrontos[indiceConfrontoAtual][1])}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Copa