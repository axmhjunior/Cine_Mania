import { Link } from "react-router-dom";

function SubMenu() {
    return ( 
        <div className="w-full flex flex-col absolute sm:bg-black bg-gray" >
        <Link to={`/animation`} className="p-1 mt-1 transition hover:bg-grayV2">Anime</Link> 
        <Link to={`/comedy`} className="p-1 transition hover:bg-grayV2">Comedy</Link>
        <Link to={`/documentary`} className="p-1 transition hover:bg-grayV2">Documentary</Link>
        <Link to={`/sport`} className="p-1 transition hover:bg-grayV2">Sports</Link>
    </div>
     );
}

export default SubMenu;