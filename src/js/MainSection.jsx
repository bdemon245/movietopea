import '../css/main-section.css';
function MainSection(props) {


    return (
        <main>
            <div className="container">
                <Card />
            </div>
        </main>
    )
}

function Card(props) {
    const movie = {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"

    }
    return (
        <div className="movie-card rounded mb-3" style={{ width: 260, height: 320 }}>
            <img className="rounded movie-poster" src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: '100%' }} />
            <h3 className="movie-year text-light  rounded-bottom">2012</h3>
            <div className="movie-info bg-secondary container py-3">
                <h2 className='movie-title text-light'>{movie.Title}</h2>
                <h2 className='movie-type text-light'>{}</h2>

            </div>

        </div>
    )
}

export { MainSection }