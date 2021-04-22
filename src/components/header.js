import React from 'react';
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className='row v-center space-between'>
                    <div className='logo'>
                        <a href="/">
                            <div className="logo-image">
                                <Logo />
                                <span>Design <br />
                                Masterklass</span>
                            </div>
                        </a>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>Success stories</li>
                            <li>Request a call back</li>
                            <li>
                                <button>Reserve Seat</button>
                            </li>
                        </ul>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;