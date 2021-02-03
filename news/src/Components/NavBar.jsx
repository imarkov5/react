import React from 'react'

function NavBar() {
    return (
        <nav>
            <h1>TEK News</h1>
            <span>Add your &lt;Link/&gt;'s to the Pages Here in the NavBar</span>
            <p>You will need to use React Router's Navigation system as opposed to 'a' tags to achieve proper client side routing</p>
            <ul>
                <li><a href="http://bit.ly/teksysacademy" target="_blank" rel="noreferrer">Sports</a></li>
                <li><a href="http://bit.ly/teksysacademy" target="_blank" rel="noreferrer">Weather</a></li>
                <li><a href="http://bit.ly/teksysacademy" target="_blank" rel="noreferrer">Politics</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;