import React from 'react'

import '../styles/NavBar.scss'

const NavBar = () => (
    <nav>
        <div className="nav">
            <ul>
                <li>
                    <a className="nav-link" href="index.html">
                        <img src={`${process.env.PUBLIC_URL}/images/Br (2).png`} alt="a" />
                        Brain-ium
                    </a>
                </li>
                <li>Subjects</li>
                <li>IB</li>
                <li>Resources</li>
                <li>About Us</li>
            </ul>
            <a className="nav-link nav-login" href="login.html">Login</a>
        </div>
    </nav>
);

export default NavBar;