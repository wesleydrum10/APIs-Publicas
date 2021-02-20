import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import api from '../../services/api';
import './styles.css';

export default function Main() {

    const [filmes, setFilmes] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        let params = ''
        if (search) {
            params = search.toLocaleLowerCase()
            console.log('Search', params)
        }
        api.get(`?s=${params}&apikey=87cbb43e`)
            .then((response) => {
                setFilmes(response.data.Search)
                console.log('Filmes', response.data)
            })
            .catch(() => {
                console.log('Erro ao trazer os dados')
            })
    }, [search])

    return (
        <>
            <Header value={search} placeholder="BUSCAR" onChange={(searching) => setSearch(searching)} />
            {filmes ?
                <div className="product-list">
                    {filmes.map(filme => (
                        <article key={filme.imdbID}>
                            <strong>{filme.Title}</strong>
                            <strong>Ano: </strong><p>{filme.Year}</p>
                            <p>{filme.Type}</p>
                            <img src={filme.Poster} />
                        </article>
                    ))}
                </div>
                : "Não encontrado"}

        </>
    );
}