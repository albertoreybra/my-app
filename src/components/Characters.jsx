import PropTypes from 'prop-types';

export default function Characters(props) {

  const { characters, setCharacters, favorites, toggleFavorite } = props;

  const resetCharacters = () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver al home</span>
        <div className="container-characters">
          {characters.map( (character, index) => (
            <div key={index} className="character-container">
              <div>
                <img src={character.image} alt={character.name}/>
              </div>
              <div>
                <h3>{character.name}</h3>
                <h6>
                  {character.status === 'Alive' ? (
                    <>
                      <span className='alive'></span>
                      Alive
                    </>
                  ) : (
                    <>
                      <span className='dead'></span>
                      Dead
                    </>
                  )}
                </h6>

                <p>
                  <span className='text-gray'>Episodios: </span>
                  <span>{character.episode.length}</span>
                </p>
                <p>
                  <span className='text-gray'>Especie: </span>
                  <span>{character.species}</span>
                </p>
                <button onClick={() => toggleFavorite(character)}>
                  {favorites.some(fav => fav.name === character.name) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <span className='back-home' onClick={resetCharacters}>Volver al home</span>
    </div>
  );
}

// Validación de las props
Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Aseguramos que cada character tenga un 'name' de tipo string
      image: PropTypes.string.isRequired,
      episode: PropTypes.array.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired, // Validación para asegurarse que 'characters' sea un array de objetos con la propiedad 'name'
  setCharacters: PropTypes.func.isRequired, // Validación para asegurarse de que 'setCharacters' sea una función
};
