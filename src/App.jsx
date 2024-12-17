import './App.css';
import Characters from './components/Characters';
import imageRickMorty from './img/rick-morty.png';
import { useState } from 'react';

function App() {

  const [characters, setCharacters] = useState(null);


  const reqAPI = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterAPI = await api.json(); // Obtener el JSON de la petición HTTP
    setCharacters(characterAPI.results);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqAPI} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
      </header>
    </div>
  )
}

export default App