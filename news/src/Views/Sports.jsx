import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Article from '../Components/Article';

function Sports() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        getSports();
    }, []);

    const getSports = async() => {
        
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=9afc85f11f1842efad56969083c4d1ef`)
        setSports(response.data.articles);
    }
    return (
        <div>
            {sports.map((article, i) => <Article
            key={i}
            image={article.urlToImage}
            title={article.title}
            content={article.content}
            url={article.url}
            />)}            
        </div>
    )
}

export default Sports;