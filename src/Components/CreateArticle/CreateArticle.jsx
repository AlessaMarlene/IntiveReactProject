import { useState, useContext } from 'react';
import { BlogContext } from '../Context/Context';
import {sendNewArticle} from '../../utils/requests';
import CreateArticleForm from './CreateArticleForm/CreateArticleForm';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './CreateArticle.css';

const CreateArticle = () => {
    const initialFormData = {
        title: '',
        body: '',
        score: ''
    }

    const [formData, updateFormData] = useState(initialFormData);
    const [selectedScore, setSelectedScore] = useState('');
    const [showError, setShowError] = useState(false);
    const {userInfo} = useContext(BlogContext);

    const handleChange = (e) => {
        if(e.target.name === 'score') setSelectedScore(e.target.value);

        updateFormData({
          ...formData, [e.target.name]: e.target.value.trim()
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await sendNewArticle(formData.title, formData.body, formData.score, userInfo.username, userInfo.tokenSession);
        }catch(e){
            setShowError(true);
        }
        updateFormData(initialFormData);
        setSelectedScore('');
    };
    
    return(
        <div className='createArticle'>
            {!!userInfo.username ?
            <div className='createArticleWrapper'>
                
                <CreateArticleForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                selectedScore={selectedScore}/>

                {showError && <p>Article couldn't be created. Try again.</p>}
            </div> :
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                You have to <strong>sign in</strong> before posting a new article.
            </Alert>}
        </div>
    );
}

export default CreateArticle;