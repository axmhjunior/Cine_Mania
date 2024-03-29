import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  IoIosSearch  } from "react-icons/io";

function GlobalForm() {
    const [searchValue, setSearchValue] = useState();
    const navigate = useNavigate();

    const handleInput = (event) => {
        event.preventDefault();
        (searchValue && navigate(`/search?q=${searchValue}`))
        setSearchValue("")
    }
    
    return ( 
        <form className="flex mb-5" onSubmit={handleInput} >
        <input type="text" 
        placeholder="Search..."
        onChange={(e)=>setSearchValue(e.target.value)}
        className="outline-none pl-4 sm:w-64 w-64 text-black"
        />
        <button type="submit" className="p-3 border-2 md:bg-black border-gray" ><IoIosSearch/></button>
    </form>
     );
}

export default GlobalForm;
