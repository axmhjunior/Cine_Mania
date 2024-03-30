import {IoIosStar} from "react-icons/io"
import { Link } from "react-router-dom";

function Card({data}) {
    
    return ( 
        <div className="hover:opacity-70 sm:h-80">
                <Link to={`/movie/${data.id}`}>
                <section className="rounded-md w-64 md:w-72 sm:w-full bg-gray min-h-96 sm:min-h-52">
                    <img src={data.large_cover_image}  className=" w-full h-full rounded-lg"  />
                </section>
                <section className="w-64 sm:w-36">
                    <p className="text-xs sm:text-base md:text-xl">Year {data.year}  -  <IoIosStar className="inline -mt-1"/>  {data.rating}</p>
                    <h3 className="text-2xl sm:text-xl md:text-3xl">{data.title_english}</h3>
                </section>
                </Link>
        </div>
     );
}

export default Card;
