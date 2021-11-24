import {Link} from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';
import { amber } from '@mui/material/colors';
import './ArticleResume.css';

const ArticleResume = ({id, title, resume, score}) => {
    return(
        <div className='articleResume'>
            <div className='resumeContent'>
                <Link className='articleLink' to={`/article/${id}`}>{title}</Link>
                <div>
                    {[...Array(parseInt(score))].map((arrayItem, index) => <StarIcon key={index} sx={{ color: amber[700] }}/>)}
                </div>
                <p>{resume}</p>
            </div>
            <ArticleIcon sx={{ color: amber[700] }}/>
        </div>
    );
}

export default ArticleResume;