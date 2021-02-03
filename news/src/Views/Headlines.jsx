import React from 'react';
import Article from '../Components/Article';

function Headlines() {
    return (
        <div>
            <h1>Headline News goes here: </h1> 
            <p>This should be on the main home page</p>
            <Article/>
            <Article/>
            <Article/>
        </div>
    )
}

export default Headlines;