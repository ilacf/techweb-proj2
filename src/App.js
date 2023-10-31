import logo from './logo.svg';
import './App.css';
import BuscarFilme from './components/BuscarFilme';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <h3>Filmes</h3>
      <BuscarFilme></BuscarFilme>
    </div>
  );
}

export default App;
