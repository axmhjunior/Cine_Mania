import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  IoIosSearch  } from "react-icons/io";

function ErrorForm() {
    const [searchValue, setSearchValue] = useState();
    const navigate = useNavigate();

    const handleInput = (event) => {
        event.preventDefault();
        (searchValue && navigate(`/search?q=${searchValue}`))
        setSearchValue("")
    }
    
    return ( 
        <form className="mb-5 hidden lg:flex" onSubmit={handleInput} >
        <input type="text" 
        placeholder="Search for content here."
        onChange={(e)=>setSearchValue(e.target.value)}
        className="outline-none pl-4 w-full text-black"
        />
        <button type="submit" className="p-2 border-2 border-gray" ><IoIosSearch/></button>
    </form>
     );
}

export default ErrorForm;
