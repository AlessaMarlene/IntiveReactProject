import './CommentContent.css';

const CommentContent = ({commentContent, commentDate}) => {
    return(
        <div className='commentBox'>
            <b>{commentDate}</b>
            <p>{commentContent}</p>
        </div>
    );
}

export default CommentContent;