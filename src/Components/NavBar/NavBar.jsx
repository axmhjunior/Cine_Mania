import { useState } from "react";
import {  IoIosSearch, IoIosMenu, IoIosArrowDown, IoIosClose } from "react-icons/io"
import { Link } from "react-router-dom";
import Form from "./Form";
import SubMenu from "./SubMenu";
import GlobalForm from "../GlobalForm/GlobalForm";


function NavBar() {
    const [show, setShow] = useState(true);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    
    const toggleSearch = () => {
        setShow(!show)
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu)
    }

    return ( 
        <>
        <header className="max-w-7xl  mx-auto space-y-2 md:space-y-0">
            <section className="flex md:hidden sm:hidden justify-center  bg-gray p-2 ">
            <nav>
                <ul className="list-none flex space-x-6">
                    <li><Link to={"/"} className="hover:text-royalBlue hover:border-b-4">Start</Link></li>
                    <li><Link to={"/action"} className="hover:text-royalBlue hover:border-b-4">Action</Link></li>
                    <li><Link to={"/romance"} className="hover:text-royalBlue hover:border-b-4">Romance</Link></li>
                    <li><Link to={"/drama"} className="hover:text-royalBlue hover:border-b-4">Drama</Link></li>
                    <li><Link to={"/horror"} className="hover:text-royalBlue hover:border-b-4">Horror</Link></li>
                    <li onMouseEnter={toggleSubMenu} 
                        onMouseLeave={toggleSubMenu} 
                        onClick={toggleSubMenu} 
                        className="relative cursor-pointer"><Link className="hover:text-royalBlue hover:border-b-4">More Categories</Link> 
                        <IoIosArrowDown className="ml-4 inline"/> 
                        {(showSubMenu && <SubMenu/>)} 
                    </li>
                </ul>
            </nav>
            <button onClick={toggleSearch} className="ml-3">{show ? <IoIosSearch/> : <IoIosClose/>}</button>
            </section>

            <section className={show ? "hidden" : "block"}>
                <Form/>
            </section>

            <section className={(showMenu) ? "" : "sm:bg-black sm:block md:block hidden"}>
                <section className={(showMenu) ? "" : "md:w-1/2 z-50 sm:w-full sm:bg-black sm:fixed top-0 sm:bottom-8"}>
            <button onClick={toggleMenu} className="border p-2 text-2xl bg-gray md:mt-2 rounded hidden md:block sm:block ml-4">{(showMenu) ? <IoIosMenu/> : <IoIosClose/>}</button>
            <section className={(showMenu) ? "hidden " : "sm:flex sm:h-screen md:flex md:h-screen md:bg-gray md:w-1/2 md:absolute z-50 sm:bg-black"}>
            
            <nav className="mt-0 w-full">
                <section className="flex justify-center mt-4">
                <GlobalForm onClick={toggleMenu}/>
                </section>
                
                <ul className="list-none flex flex-col text-start mt-4 text-2xl px-4">
                    
                    <li onClick={toggleMenu} className="bg-grayV2 w-full mt-1 p-2"><Link to={"/"}>Start</Link></li>
                    <li onClick={toggleMenu} className="hover:bg-grayV2 transition w-full mt-1 p-2"><Link to={"/action"}>Action</Link></li>
                    <li onClick={toggleMenu} className="hover:bg-grayV2 transition w-full mt-1 p-2"><Link to={"/romance"}>Romance</Link></li>
                    <li onClick={toggleMenu} className="hover:bg-grayV2 transition w-full mt-1 p-2"><Link to={"/drama"}>Drama</Link></li>
                    <li onClick={toggleMenu} className="hover:bg-grayV2 transition w-full mt-1 p-2"><Link to={"/horror"}>Horror</Link></li>
                    <li 
                        onClick={toggleSubMenu} 
                        onChange={toggleMenu}
                        
                        className="relative cursor-pointer bg-grayV2 p-2">More Categories 
                        <IoIosArrowDown className="ml-4 inline"/> 
                        {(showSubMenu && <SubMenu />)} 
                    </li>
                </ul>
            </nav>
            </section>
            </section>
            <section className="relative sm:hidden lg:hidden">
                <Form/>
            </section>
            </section>
        </header>
        </>
     );
}

export default NavBar;