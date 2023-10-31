import React, {useState} from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

export default function PagFilme(props){
    const palavras = props.palavrasChave;

    const location = useLocation();

    const titulo = location.pathname.split("/").pop()
    // const releaseYear = location.state.releaseYear;
    // const imagem = location.state.imagem;

    return(
        <div>
            {/* <img src={imagem}></img> */}
            {/* <h1>{titulo} ({releaseYear})</h1> */}
            <h2>Palavras-chave relacionadas ao filme escolhido:</h2>
            <ul> {palavras?.map((palavra, index)=>(
                <li key={index}>{palavra}</li>
            ))}
            </ul>
        </div>
    )
};