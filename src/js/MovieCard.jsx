import '../css/card.css'
function MovieCard({ movie }) {
    const isLoading = movie === 'isLoading'
    const title = movie.title === undefined ? movie.name : movie.title
    const poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
    const release_date = movie.release_date === undefined ? movie.first_air_date : movie.release_date
    const { media_type, overview, vote_average, vote_count } = movie

    return (
        <div className={isLoading ? "movie-card m-3 placeholder-glow" : "movie-card m-3"}>
            <div className="hidden-div movie-details">
                <h3 className={isLoading ? 'placeholder col-6' : "movie-title mb-3"}>{title}</h3>
                <div className="d-flex justify-content-between">
                    <div className='details justify-self-start'>
                        <p className='' style={{ margin: 0 }}>Type: <br /><span className='ms-2' >{media_type === undefined ? undefined : media_type.toUpperCase()}</span> </p>
                        <p className='' style={{ margin: 0 }}>Release:<br /><span className='ms-2' >{release_date}</span></p>
                    </div>
                    <div className='details justify-self-end'>
                        <p style={{ marginBottom: 5 }} className="text-end">
                            <span>{`(${vote_average})`}</span>
                            <i className="fa-solid fa-star"></i>
                        </p>
                        <p className="text-end">
                            <span>{`(${vote_count})`}</span>
                            <i className="fa-solid fa-user"></i>
                        </p>
                    </div>
                </div>

            </div>
            <img className={isLoading && "placeholder col-12"} src={movie.poster_path === undefined ? "http://via.placeholder.com/500" : poster} alt={title} />
            <div className="movie-info">
                <div className={isLoading ? 'placeholder-glow wrapper' : 'wrapper'}>
                    <h3 className={isLoading ? 'placeholder col-6 movie-title' : "movie-title"}>{title}</h3>
                </div>
            </div>
        </div>
    )
}
export default MovieCard