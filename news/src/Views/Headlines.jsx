import React, { useEffect, useState} from 'react';
import Article from '../Components/Article';
import axios from 'axios';

function Headlines() {
    const [headlines, setHeadlines] = useState([]);
    
    useEffect(() => {
        getHeadlines();
        
    }, []);
    const getHeadlines = async() => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9afc85f11f1842efad56969083c4d1ef`)
        
        setHeadlines(response.data.articles);
            
    }
    return (
        <div>
            {headlines.map((article, i) => <Article 
            key={i}
            title={article.title}
            image={article.urlToImage}
            url={article.url}
            content={article.content}/>)}
        </div>
    )
}

export default Headlines;