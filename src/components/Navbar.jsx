import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import { FaHeart } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return
    navigate(`/search?q=${search}`);
    setSearch("");
  }

    return(
        <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie />My Movies</Link>
          </h2>
          {/*<Link to="/movie"><FaHeart />Filmes Favoritos</Link>*/}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar Filmes" onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit"><BiSearchAlt2 /></button>
          </form>
      </nav>
    );

};

export default Navbar;