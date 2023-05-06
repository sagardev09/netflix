import React from 'react'
import logo from "../../Assests/Logonetflix.png"
import { Link } from 'react-router-dom'
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">
            <img src={logo} alt="netflix-logo" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/Tvshows">TV Shows</Link>
                <Link to="/Movies">Movies</Link>
                <Link to="/new">New & Popular</Link>
                <Link to="/Mylist">My List</Link>
            </div>
            <ImSearch />

        </nav>
    )
}

export default Header
