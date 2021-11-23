import Button from '@mui/material/Button';
import './ArticleContent.css';

const ArticleContent = ({article, userInfo, handleDelete, getParseDate}) => {
    return(
        <div className='articleContent'>
            <div className='articleBanner'></div>
            <div className='articleHeader'>
                <h1>{article.Title}</h1>
                {(!!userInfo.roles && userInfo.roles.includes('Admin')) && <Button className='formButton' variant="outlined" onClick={handleDelete}>Delete article</Button>}
            </div>
            <div className='articleContentData'>
                <h4>{article.Creator}</h4>
                <h4>{getParseDate(article.createdAt)}</h4>
                <p>{article.Body}</p>
            </div>
        </div>
    );
}

export default ArticleContent;