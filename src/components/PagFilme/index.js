import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function PagFilme(props){
    const [palavras, setPalavras] = useState([]);

    const location = useLocation();
    const id = location.pathname.split("/").pop()

    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fcc2c4246fmsh02ccffd5e5d1651p1397fbjsndef4f61b2e54',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${id}`, options);
            setData(response.data);
        };

        fetchData();
    }, [id, options]);

    const imagem = data.results?.primaryImage.url;
    const releaseYear = data.results?.releaseYear.year;
    const titulo = data.results?.titleText.text;

    function addWord() {
        
    };

    return(
        <div>
            <img src={imagem}></img>
            <h1>{titulo} ({releaseYear})</h1>

            <h2>Palavras-chave relacionadas ao filme escolhido:</h2>
            {palavras.length === 0 ? (
                <p>Ainda não há palavras chaves atreladas ao filme.</p>
            ) : (
                <ul> {palavras?.map((palavra, index)=>(
                    <li key={index}>{palavra}</li>
                ))}
                </ul>
            )}

            <p>Adicionar mais uma palavra?</p>
            <form method="post" onSubmit={addWord}><input  /></form>
        </div>
    )
};