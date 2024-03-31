import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem'; // Importing Newsitem component

const Newsboard = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <center>
                <h2 className="text-centre">
                    Latest <span className="Badge bg-danger">News</span>   
                </h2>
                {articles.map((news, index) => (
                    <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
                ))}
            </center> 
        </div>
    );
}

export default Newsboard;
