import {Link} from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import { amber } from '@mui/material/colors';
import './ArticleResume.css';

const ArticleResume = ({id, title, resume}) => {
    return(
        <div className='articleResume'>
            <div className='resumeContent'>
                <Link className='articleLink' to={`/article/${id}`}>{title}</Link>
                <p>{resume}</p>
            </div>
            <ArticleIcon sx={{ color: amber[700] }}/>
        </div>
    );
}

export default ArticleResume;