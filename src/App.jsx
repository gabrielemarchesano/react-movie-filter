import { useState } from "react";

function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  const [selectedGenre, setSelectedGenre] = useState("");

  function handleGenreChange(event){
    setSelectedGenre(event.target.value);
  }
  console.log(selectedGenre)
  return (
    <>
      <div className="container">
        <div className="py-4">
          <div className="mb-3">
            <select className="form-select form-select-lg" value={selectedGenre} onChange={handleGenreChange}>
              <option value="">Seleziona un genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </div>
          <p>{selectedGenre}</p>
          <div className="card">
            <ul className="list-group">
              {
                movies.map((movie, index) => (
                  <li className="list-group-item" key={index}>
                    <h4>{movie.title}</h4>
                    <small>{movie.genre}</small>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
