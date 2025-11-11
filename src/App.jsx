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

  return (
    <>
      <div className="container">
        <div class="mb-3">
          <select
            className="form-select form-select-lg"
          >
            <option selected>Seleziona un genere</option>
            <option value="">Fantascienza</option>
            <option value="">Thriller</option>
            <option value="">Romantico</option>
            <option value="">Azione</option>
          </select>
        </div>
        
        <div className="card my-2">
          <ul className="list-group">
            {
              movies.map((movie) => (
                <li className="list-group-item">
                  <h4>{movie.title}</h4> 
                  <small>{movie.genre}</small>
                </li>
              ))
            }
          </ul>
          
        </div>
      </div>
    </>
  )
}

export default App
