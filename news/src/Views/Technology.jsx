import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Article from '../Components/Article';


function Technology() {
    const [technology, setTechnology] = useState([]);

    useEffect(() => {
        getTechnology();
    }, [])

    const getTechnology = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9afc85f11f1842efad56969083c4d1ef`)
        setTechnology(response.data.articles)
        console.log(technology);
    }
    return (
        <div>
            {technology.map((article, i) => <Article 
            key={i} 
            title={article.title} 
            content={article.content} 
            image={article.urlToImage} 
            url={article.url}/>)}
        </div>
    )
}

export default Technology;