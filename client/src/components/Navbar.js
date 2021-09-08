import React from 'react'
import logo from "../images/images/mtnlogo.png"

const Navbar = () => {
    return (
        <nav className="uk-navbar-container navbar" uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active">
                        <img src={logo} className="mtn-logo" />
                        <span className="page-title mtn-font">KYC Update</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
