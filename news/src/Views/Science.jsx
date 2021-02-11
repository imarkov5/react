import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Article from '../Components/Article';

function Science() {
    const [science, setScience] = useState([]);

    useEffect(() =>{
        getScience();
    }, [])

    const getScience = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=9afc85f11f1842efad56969083c4d1ef`)
        setScience(response.data.articles);
    }

    return (
        <div>
            {science.map((article, i) => <Article
            key={i}
            title={article.title}
            content={article.content}
            image={article.urlToImage}
            url={article.url}
            />)}
        </div>
    )
}

export default Science;