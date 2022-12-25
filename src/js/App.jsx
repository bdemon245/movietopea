import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import MovieCard from './MovieCard'
import '../css/search-bar.css'


function App() {
  const movie = {
    "Title": "Avatar",
    "Year": "2009",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg"
  }
  const API_URL = 'http://www.omdbapi.com/?apikey=30f746b0'
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [title, setTitle] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies(title)

  }, [title])
  return (
    <div className="App w-100 h-100">
      <Header />
      <div className='container px-5 py-2 d-flex justify-content-center'>
        <div id="search-bar" className='d-flex align-items-center' style={{ width: '80%' }}>
          <input
          style={{fontSize: 16}}
            className="form-control me-2 bg-dark search-box text-secondary"
            placeholder="Search for movies"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }} aria-label="Search" />
          <button className='bg-none p-2 rounded-3 search-btn text-center' onClick={() => setTitle(query)} onSubmit={() => setTitle(query)}> <i
            className="fa-solid fa-search" style={{ fontSize: 16 }}></i></button>

        </div>
      </div>
      <div className="row">
        {
          movies?.length > 0 ? (
            movies.map(movie => (
              <div className="col-sm-3 d-flex justify-content-center align-items-center">
                <MovieCard movie={movie} key={movie.imdbID} />
              </div>
            ))
          ) : (
            <div className="text-light text-center">
              Loading...
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
