import React, { useEffect, useState } from 'react'
import Filme from './Filme'
import filmesJson from '../db.json'
import { useNavigate } from 'react-router-dom';
import { Titulo } from './Titulo';

const Copa = () => {
    const navigate = useNavigate();
    const [filmes, setFilmes] = useState(shuffle(filmesJson.filmes));
    const [confrontos, setConfrontos] = useState([]);
    const [vencedores, setVencedores] = useState([]);
    const [indiceConfrontoAtual, setIndiceConfrontoAtual] = useState(0);
    const [rodadaAtual, setRodadaAtual] = useState(1);
    const [textoRodada, setTextoRodada] = useState();

    useEffect(() => {
        //console.log(filmes)
        iniciarConfrontos(filmes)    
    }, []);

    useEffect(() => {

        const tamanhoLista = confrontos.length == 0 ? filmes.length/2 : confrontos.length
        
        if (tamanhoLista == 8) {
            setTextoRodada("Oitavas de final")
        }

        if (tamanhoLista == 4) {
            setTextoRodada("Quartas de final")
        }

        if (tamanhoLista == 2) {
            setTextoRodada("Semifinal")
        }

        if (tamanhoLista == 1) {
            setTextoRodada("Final")
        }

    }, [rodadaAtual])

    const iniciarConfrontos = (listaFilmes) => {
        //console.log(listaFilmes)
        const listaConfrontos = [];
        for (let i = 0; i < listaFilmes.length; i += 2) {
            listaConfrontos.push([listaFilmes[i], listaFilmes[i + 1]]);
        }

        setConfrontos(listaConfrontos);
        setIndiceConfrontoAtual(0);
    }

    const selecionarVencedor = (vencedor) => {
        setVencedores((prev) => [...prev, vencedor]);
        //console.log(vencedores)
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
            <Titulo texto={textoRodada} />

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