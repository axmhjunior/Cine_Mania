import { BrowserRouter, Route,  Routes } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home"
import Categories from "./Components/Categories/Categories"
import Search from "./Pages/Search/Search"
import Movie from "./Pages/Movie/Movie"
import Page404 from "./Errors/Page404"
import Footer from "./Components/Footer/Footer"



function App() {


  return (
    
    <BrowserRouter>
      <NavBar/>
      <div className="min-h-96 mb-20">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:categorie" element={<Categories/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/movie/:id" element={<Movie/>} />
            <Route path="*" element={<Page404/>} />   
        </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
    
  )
}

export default App
