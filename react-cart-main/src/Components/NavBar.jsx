import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="/Login">Login</Link>
            <style jsx>
                {`
                    navbar a {
                        margin: 10px
                    }
                `}
            </style>
        </div>
    )
}

export default NavBar
