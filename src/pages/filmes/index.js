import React , { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {

    state  = {
        filmes: [],
        filmeInfo: {},
    };

    componentDidMount() {
        this.loadFilmes();
    }

    loadFilmes = async () => {
        const response = await api.get();
        const { Search, ...filmeInfo } = response.data;
        this.setState({filmes: Search, filmeInfo });
        console.log(response.data.Search);
    }

    render() {

        const { filmes } = this.state;

        return (
            
            <div className="product-list">
                {filmes.map(filme => (
                    <article key={filme.imdbID}>
                        <strong>{filme.Title}</strong>
                        <strong>Ano: </strong><p>{filme.Year}</p>
                        <p>{filme.Type}</p>
                        <img src={filme.Poster}/>
                    </article>
                ))}
            </div>
        );
    }
}