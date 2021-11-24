import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { amber } from '@mui/material/colors';
import './CommentContent.css';

const CommentContent = ({commentContent, commentDate}) => {
    return(
        <div className='commentBox'>
            <AccountBoxIcon sx={{ color: amber[700] }}/>
            <div className='commentBody'>
                <b>{commentDate}</b>
                <p>{commentContent}</p>
            </div>
        </div>
    );
}

export default CommentContent;