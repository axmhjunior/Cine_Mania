import { Link } from "react-router-dom";

function HighlightsCard({data}) {
    return ( 
        <>
        <div className="sm:flex w-full md:w-60 sm:justify-center">
            <Link to={`/movie/${data.id}`} className="sm:w-11/12 " >
                <div className="h-48 mt-2">
                     <img className="h-full w-full object-cover rounded-lg" src={data.large_cover_image} alt="" />
                </div>
            </Link>
            </div>
        </>
     );
}

export default HighlightsCard;
