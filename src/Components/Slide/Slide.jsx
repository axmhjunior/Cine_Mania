import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API


function Slide() {
    const [movies, setMovies] = useState([]);
    const [slidePerView,setSlidePerView] = useState(3);


    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.data.movies);
    }; 

    useEffect(() =>{
        function handleResize(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(3);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)
        return () =>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    useEffect(()=>{
        const urlMovie = (`${apiUrl}?limit=21&sort=seeds`)
        getMovie(urlMovie)
    },[]);

    return ( 
        <div className="p-9">
            <Swiper
             slidesPerView={slidePerView}
            pagination={{clickable:true}}
            navigation
            autoplay>
                {
                    movies.map(item=>
                     
                    <SwiperSlide key={item.id}>
                        <Link to={`/movie/${item.id}`} >
                            <div className="flex justify-center w-full items-center">
                                <img className="h-80" src={item.large_cover_image} alt="" />
                            </div>
                    </Link>                   
                    </SwiperSlide>
                    )
                }
            </Swiper>

        </div>
     );
}

export default Slide;