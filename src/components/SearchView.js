import { Link } from "react-router-dom";
import Hero from "./Hero";
// example link for movie searches: https://api.themoviedb.org/3/search/movie?api_key=df39cc89a07614ae3b5e43af7cc7c266&language=en-US&query=star%20wars&page=1&include_adult=false





const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}` 
  return (
    <div className="col-log-3 col-md-3 col-2 my-4">
    <div className="card">
      <img
        src={posterUrl}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title} </h5>
        <a href={detailUrl} className="btn btn-primary">
          Show Details
        </a>
      </div>
    </div>
    </div>
  );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  });
  const renderResults = () => {
   
    return <div className = "container">
        <div className = "row">
            {resultsHtml}
        </div>
    </div>
}

const renderNoResults = () => {
 
  return <div className="p-5 hero-container">
      <h1 className="hero-text">Sorry, that movie does not exist in our database.</h1>
     
  </div>     
}


  return (
    <>
      <Hero text={title} />
      {Array.isArray(resultsHtml) && resultsHtml.length ? renderResults() : renderNoResults()}
      <div className="container">
          <div className="row">
              {resultsHtml}
          </div>
      </div> 
           
    </>
  );
};
export default Search;
