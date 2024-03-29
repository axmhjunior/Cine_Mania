import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import {LuLoader} from "react-icons/lu"
import Highlights from "./Highlights";
import Slide from "../../Components/Slide/Slide";

const apiUrl = import.meta.env.VITE_API


function Home() {
    const [movies, setMovies] = useState([]);
    const [filterMovies, setFilterMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingPage, setLoadingPage] = useState(true);
    const [visibleMovies, setVisibleMovies] = useState(21);
    
    
    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json(); 

        setFilterMovies(data.data.movies); 
        const newList = filterMovies.filter(item => ((item.torrents.length != 0) && (item.genres.length < 7)))
        setMovies(newList)
        setLoadingPage(false);
    }

    useEffect(()=>{
        const urlMovie = (`${apiUrl}?limit=50`);
        getMovie(urlMovie);
    },[filterMovies]);


    const increaseMovies = ()=>{
        setLoading(false);
        setVisibleMovies(preVisibleMovies => preVisibleMovies + 6);  
        setLoading(true);
    }

    return ( 
            
        <div className="max-w-7xl  mx-auto mt-8">
            <Slide/>
{   (loadingPage) ? "" :  ( <section className="mt-8 flex sm:flex-col justify-around">
                <section className="flex flex-col items-center">
                    <section className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 sm:gap-2 gap-8 sm:items-center">
                        {movies.slice(0, visibleMovies).map((item)=> <Card key={item.id} data={item} />)}
                    </section>
                {(loading) ? (<button onClick={increaseMovies} 
                className={(visibleMovies > 50) ? "hidden": "bg-gray mt-2 p-1 rounded w-full"}>
                    LOAD MORE</button>) : (<LuLoader className="text-lg spin"/>)}
                </section>
                <Highlights/>
            </section>)}
        </div>        
     );
    }

export default Home;
