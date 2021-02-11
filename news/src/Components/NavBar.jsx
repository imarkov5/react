import React from 'react';
import logo from '../tek_logo.png';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1><Link to="/">TEK News</Link></h1>
            <img src={logo} className="App-logo" alt="logo" />

            <ul>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/technology">Technology</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;