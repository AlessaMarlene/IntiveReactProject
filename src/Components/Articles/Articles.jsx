
import {getAllArticles} from '../../utils/requests';
import { useEffect, useState } from 'react';
import ArticleResume from './ArticleResume/ArticleResume';
import './Articles.css';

const Articles = () => {
    const [articlesList, setArticlesList] = useState([]);
    
    useEffect(() => {
        let isMounted = true
        getAllArticles().then((articles) => isMounted && setArticlesList(articles));
        return () => {isMounted = false}
    }, []);
    
    return(
        <div className='articles'>
            {articlesList.map((article) => <ArticleResume key={article.objectId} id={article.objectId} title={article.Title} resume={article.Body}/>)}
        </div>
    );
}

export default Articles;