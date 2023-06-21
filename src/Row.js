import React, { useState , useEffect } from "react";
import axios from "./Axios";
import "./Row.css"

function Row({title , fetchUrl , isLargeRow=false}){
    
    const [movies,setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);

        return request;
      }
    
      fetchData();
    }, [fetchUrl]);

    
    function handlePlayClick(movie) {
      // Redirect to the actual movie on Netflix
      window.location.href = `https://www.netflix.com/watch/${movies.id}`;
    }
    

    return (
    <div className="row">
        <h2>{title}</h2>

       <div className="row_posters">
        {movies.map((movie) =>(
            

            <img 
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                 isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
               alt={movie.name}
               onClick={handlePlayClick}
            />
            
        ))}
        </div>
    </div>
    );
}

export default Row;