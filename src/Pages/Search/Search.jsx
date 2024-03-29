import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Movie404 from "../../Errors/Movie404";
import {LuLoader} from "react-icons/lu"


const apiUrl = import.meta.env.VITE_API

function Search() {
    const [searchParams] = useSearchParams();
    const [loadingPage, setLoadingPage] = useState(true);
    const [loadingMovies, setLoadingMovies] = useState(true);
    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const query = searchParams.get("q");
    const [visibleMovies, setVisibleMovies] = useState(21);


    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();  
        setFilterMovies(data.data.movies);
        if(filterMovies){
            const newList = filterMovies.filter(item => ((item.torrents.length != 0) && (item.genres.length < 7)))
            setMovies(newList);
            setLoadingPage(false);
    }else{
        setMovies(filterMovies);
    }
    }

    useEffect(()=>{
        const urlMovie = (`${apiUrl}?limit=50&query_term=${query}`);
        getMovie(urlMovie);
    },[query, movies, filterMovies]);

    const increaseMovies = ()=>{
        setLoadingMovies(false);
        setVisibleMovies(preVisibleMovies => preVisibleMovies + 6);
        setLoadingMovies(true);  
    }

    return ( 

        <div className="max-w-7xl  mx-auto mt-8">

            <h3 className="text-3xl mb-4">RESULTS FOR: {query}</h3>

            {(loadingPage) ? "" : (<section className="flex justify-around">
                <section className="flex flex-col items-center">
                    {(!movies) ? <Movie404/> : 
                    <><section className="grid grid-cols-3  sm:grid-cols-2 sm:gap-2 gap-8 sm:items-center">
                         {movies.slice(0, visibleMovies).map((item)=> <Card key={item.id} data={item} />)}
                    </section>
                    {(visibleMovies < movies.length) &&  ((loadingMovies) ? (<button onClick={increaseMovies} 
                className= "bg-gray mt-2 p-1 rounded w-full">
                    LOAD MORE</button>) : (<LuLoader className="text-lg spin"/>))}</>}
                </section>    
            </section>)}
        </div>
     );
}

export default Search;