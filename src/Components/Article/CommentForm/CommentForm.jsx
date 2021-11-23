import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './CommentForm.css';

const CommentForm = ({comment, handleCommentChange, handleSubmit}) => {
    return(
        <form className='commentForm'>
            <TextField
            name='body'
            label="What's your opinion?"
            multiline
            value={comment}
            onChange={handleCommentChange}
            />
            
            <Button
            variant="outlined" 
            onClick={handleSubmit}>Send comment</Button>
        </form>
    );
}

export default CommentForm;