import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Form() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState();


    const handleInput = (event) => {
        event.preventDefault();
        (searchValue && navigate(`/search?q=${searchValue}`))
        setSearchValue("")
    }
    return ( 
        <>
            <form onSubmit={handleInput} className="sm:p-2 md:p-2">
                <input className="outline-none w-full px-10 py-2 bg-gray"
                type="text"  
                placeholder="Search..."
                onChange={(e)=>setSearchValue(e.target.value)}/>
            </form>
        </>
     );
}

export default Form;
