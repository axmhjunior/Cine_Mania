import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";

const urlMoviesSug = import.meta.env.VITE_API

function Suggestion({genre}) {

    const [moviesSug, setMoviesSug] = useState([]);
    
    const getMovie = async (url) => {
        const response = await fetch(url);
        const data = await response.json();  
        setMoviesSug(data.data.movies);     
    }

    useEffect(()=>{
        const urlMovieSug = (`${urlMoviesSug}?limit=4&genre=${genre}`);
        getMovie(urlMovieSug);
    },[]);
    
    return ( 
        <div className="mt-12 text-center">
            <h3>RECOMMENDED FOR YOU</h3>
            {
                <section className="mt-3 grid lg:grid-cols-4 grid-cols-2 sm:gap-2 gap-2 
                justify-items-center sm:items-center">
                    {moviesSug.map((item)=> <Card key={item.id} data={item} />)}
                </section>
            }
        </div>
     );
}

export default Suggestion;