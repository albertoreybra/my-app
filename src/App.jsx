import './App.css';
import Characters from './components/Characters';
import Favorites from './components/Favorites';
import imageRickMorty from './img/rick-morty.png';
import { useState } from 'react';

function App() {

  const [characters, setCharacters] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const reqAPI = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterAPI = await api.json(); // Obtener el JSON de la petición HTTP
    setCharacters(characterAPI.results);
  }

  function toggleFavorite(character) {
    const isFavorite = favorites.includes(character);
    if (isFavorite) {
      const newFavorites = favorites.filter(fav => fav !== character);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, character]);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <>
            <Characters characters={characters} setCharacters={setCharacters} favorites={favorites} toggleFavorite={toggleFavorite}/>
            <Favorites favorites={favorites} toggleFavorite={toggleFavorite}/>
          </>
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
