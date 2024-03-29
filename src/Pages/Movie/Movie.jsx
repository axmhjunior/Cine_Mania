import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Description from "./Description";
import TorrentsInfo from "./TorrentsInfo";
import Suggestion from "./Suggestion";

const apiUrl = import.meta.env.VITE_MOVIE_DETAILS


function Movie() {

    const [movies, setMovies] = useState([]);
    const [gender, setGender] = useState([]);
    const [genreName, setGenreName] = useState([]);
    const {id} = useParams();
    
    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();  
        setMovies(data.data.movie);
        setGender(data.data.movie.genres);  
        setGenreName(data.data.movie.genres[0]);          
    }

    useEffect(()=>{
        const urlMovie = (`${apiUrl}?movie_id=${id}`);
        getMovie( urlMovie );
    },[id]);

    return ( 
        
        <div className="max-w-7xl p-3 mx-auto mt-1">
            <section className="flex flex-wrap text-lg mb-8 w-full">
                <Link to={"/"} className="text-gray">Home</Link> <p className="ml-2">&gt;</p> 
                
                {gender.map((item, index) =><><Link key={index} to={`/${item}`} 
                className="text-gray">{item}</Link> <p className="mx-2" > &gt;</p> </> )} 
                <p>{movies.title} </p>  
            </section>

            <h3 className="text-3xl">{movies.title}</h3>
            
                <section className="flex  sm:flex-col space-x-4">
                    <section className="flex space-x-4 sm:space-x-0 sm:flex sm:flex-col-reverse md:2xl sm:text-2xl">
                    <section className=" text-center min-w-64 h-96 bg-gray">
                        <img src={movies.large_cover_image} className="rounded-lg w-full h-full" alt={movies.title} />
                    </section>                             
                        <section className="mt-2 flex flex-col">
                            
                            <section className="h-auto sm:w-full sm:flex flex-wrap">
                           {
                           gender.map((item, index)=>(<Link to={`/${item}`} key={index}
                            className="bg-blue border mr-2 p-2 w-fit rounded-lg mt-4">
                            {item}
                            </Link>))
                            }
                           </section>
                           
                            <TorrentsInfo data={movies} />
                        <section className="sm:hidden">
                            <Description data={movies} />
                        </section>
                            
                        </section>
                       </section>
                        <section className="md:hidden lg:hidden">
                            <Description data={movies} />
                        </section>
                    </section>
                            <Suggestion genre={genreName}/>
        
    </div>   
     );
}

export default Movie;