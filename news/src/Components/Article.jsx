import React from 'react';
import '../App.css';

function Article({title, image, content, url, i}) {

    return (
        <article>
            <header>
                <h2><a href={url} target="_blank">{title}</a></h2>
                <img src={image} alt="image"/>
            </header>
            <main>
                <section>
                    <p>{content}</p>
                </section>
            </main>
        </article>
    )
}

export default Article;