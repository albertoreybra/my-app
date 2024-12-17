function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="favorites-container">
      <h2>Personajes Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes personajes favoritos aún.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((character) => (
            <li key={character.id} className="favorite-item">
              <img
                src={character.image}
                alt={character.name}
                className="favorite-image"
              />
              <h3>{character.name}</h3>
              
              <button onClick={() => toggleFavorite(character)}>
                Quitar de Favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
