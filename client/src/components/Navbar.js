import React from 'react'
import logo from "../images/images/mtnlogo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="uk-container"> 
                <nav className="uk-navbar-left">
                    <div>
                        <img src={logo}/> 
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
