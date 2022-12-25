import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import MovieCard from './MovieCard'
import '../css/search-bar.css'


function App() {

  // const movie = {
  //   "adult": false,
  //   "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
  //   "id": 76600,
  //   "title": "Avatar: The Way of Water",
  //   "original_language": "en",
  //   "original_title": "Avatar: The Way of Water",
  //   "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
  //   "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  //   "media_type": "movie",
  //   "genre_ids": [
  //     878,
  //     12,
  //     14,
  //     28
  //   ],
  //   "popularity": 8054.532,
  //   "release_date": "2022-12-14",
  //   "video": false,
  //   "vote_average": 8.059,
  //   "vote_count": 1166
  // }
  const trending_url = 'https://api.themoviedb.org/3/trending/all/week?api_key='
  const API_KEY = "04869aa452b9abeb3d6489bcbae7a5ee"
  const search_url = 'https://api.themoviedb.org/3/search/multi?api_key='
  const array = new Array(20)

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState(search)
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  const [query, setQuery] = useState(`${trending_url + API_KEY}&page=${page}`)
  const searchMovies = (query) => {
    setIsLoading(true)
    fetch(query)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results)
        setIsLoading(false)
      })
  }
  useEffect(() => {
    searchMovies(query)

  }, [query])


  // a loop for printing placeholders
  function printPlaceholder(times) {
    for (let i = 0; i < times; i++) {
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <MovieCard movie='isLoading' />
      </div>
    }
  }
  return (
    <div className="App w-100 h-100">
      <Header />
      <div className='container px-5 py-2 d-flex justify-content-center'>
        <div id="search-bar" className='d-flex align-items-center' style={{ width: '80%' }}>
          <input
            style={{ fontSize: 16 }}
            className="form-control me-2 bg-dark search-box text-secondary"
            placeholder="Search for movies"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }} aria-label="Search" />
          <button className='bg-none p-2 rounded-3 search-btn text-center' onClick={() => {
            setQuery(`${search_url + API_KEY}&page=${page}&query=${search}`)
            setIsSearching(true)
            setTitle(search)
          }}> <i
            className="fa-solid fa-search" style={{ fontSize: 16 }}></i></button>

        </div>
      </div>
      {/* movies panel */}
      <div id='trending-section' className="container">
        <h2 className="text-light">{isSearching === true ? `Showing results for "${title}"` : "Trendig"}</h2>
        <div className='row'>
          {

            isLoading === true ? <>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <MovieCard movie='isLoading' />
              </div>

            </> :
              movies.map(movie =>
              (
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                  <MovieCard movie={movie} key={movie.id + "@" + movie.release_date} />
                </div>
              ))
          }
        </div>
      </div>

      {/* pagination */}
      <nav className='d-flex justify-content-center' aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link" href="#">Previous</span>
          </li>
          <li className="page-item active" aria-current="page"><span className="page-link" href="#">1</span></li>
          <li className="page-item" onClick={() => {
            setPage(page + 1)
            setQuery(`${trending_url + API_KEY}&page=${page}`)
            console.log(page)
          }}>
            <span className="page-link" href="#">Next</span>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default App
