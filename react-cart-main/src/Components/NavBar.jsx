import React from 'react'
import {Link} from "react-router-dom"
import {AppContext} from "./AppProvider"
const NavBar = () => {
    return (
        <AppContext.Consumer>
        {({getCart})=>{
        return (<div className="navbar">
            <Link to="/">Home</Link>
        <Link to="/Cart">Cart {getCart().length}</Link>
            <Link to="/Login">Login</Link>
            <style jsx>
                {`
                    navbar a {
                        margin: 10px
                    }
                `}
            </style>
        </div>)
        }}
        </AppContext.Consumer>
    )
}

export default NavBar
