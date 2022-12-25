import '../css/card.css'
function MovieCard({ movie }) {

    return (
        <div className="movie-card m-3">
            <img src={movie.Poster === 'N/A' ? "https://via.placeholder.com/166" : movie.Poster } alt={movie.Title} />
            <div className="movie-info">
                <div className="wrapper">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <div className='movie-details'>
                        <p className="movie-subtitle">{movie.Type.toUpperCase()}</p>
                        <p className="movie-year">{movie.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieCard