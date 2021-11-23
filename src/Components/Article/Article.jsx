import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {getArticleById, sendNewCommentToArticle, commentsByArticleId, deleteArticle} from '../../utils/requests';
import {BlogContext} from '../Context/Context';
import CommentContent from './CommentContent/CommentContent';
import ArticleContent from './ArticleContent/ArticleContent';
import CommentForm from './CommentForm/CommentForm';
import './Article.css';

const Article = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [comment, setComment] = useState('');
    const [article, setArticle] = useState([]);
    const [commentsList, setCommentsList] = useState([]);
    const [showError, setShowError] = useState(false);
    const {userInfo} = useContext(BlogContext);

    const handleCommentChange = (e) => {
        setComment(e.target.value.trim());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await sendNewCommentToArticle(comment, id);
            commentsByArticleId(id).then((allArticleComments) => setCommentsList(allArticleComments));
        }catch(e){
            setShowError(true);
        }
        setComment('');
    };

    const handleDelete = async () => {
        await deleteArticle(id, userInfo.tokenSession);
        navigate('/articles');
    }

    const getParseDate = (date) => {
        let newDate = new Date(Date.parse(date));
        return newDate.getFullYear()+'-' + (newDate.getMonth()+1) + '-'+newDate.getDate();
    }

    useEffect(() => {
        getArticleById(id).then((articleInfo) => setArticle(articleInfo));
        commentsByArticleId(id).then((allArticleComments) => setCommentsList(allArticleComments));
    }, [id]);
    
    return(
        <div className='article'>

            <ArticleContent 
            article={article} 
            userInfo={userInfo} 
            handleDelete={handleDelete} 
            getParseDate={getParseDate}/>

            <div className='articleCommentSection'>
                <div className='commentFormSection'>
                    <h2>Leave a comment</h2>

                    <CommentForm
                    comment={comment}
                    handleCommentChange={handleCommentChange}
                    handleSubmit={handleSubmit}/>

                    {showError && <p>Comment couldn't be sent. Try again.</p>}
                </div>
                <div className='commentsList'>
                    {commentsList.map((currentComment) => 
                        <CommentContent 
                        key={currentComment.objectId} 
                        commentContent={currentComment.Body} 
                        commentDate={getParseDate(currentComment.createdAt)}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Article;