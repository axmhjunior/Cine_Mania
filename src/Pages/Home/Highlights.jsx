import HighlightsCard from "./HighlightsCard";
import { useEffect, useState } from "react";
import GlobalForm from "../../Components/GlobalForm/GlobalForm";

const apiUrl = import.meta.env.VITE_API


function Highlights() {
    const [movies, SetMovies] = useState([]);


    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        SetMovies(data.data.movies);
    }; 

    useEffect(()=>{
        const urlMovie = (`${apiUrl}?limit=5&minimum_rating=10`)
        getMovie(urlMovie)
    },[]);



    return ( 
        <section className="sm:text-center sm:text-2xl md:text-2xl">
            <section className="sm:hidden md:hidden">
                <h3>SEARCH FOR MOVIES</h3>
                <GlobalForm/>
            </section>
            
            <h3 className="my-6 md:mt-0">HIGHLIGHTS</h3>
            {
                movies.map((item)=> <HighlightsCard key={item.id} data={item} />)
            }
        </section>
     );
}

export default Highlights;
