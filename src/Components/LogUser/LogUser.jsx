import { useState } from 'react';
import SignForm from './SignForm/SignForm';
import Button from '@mui/material/Button';
import './LogUser.css';

const LogUser = () => {
    const [showForm, setShowForm] = useState(false);
    const [buttonText, setButtonText] = useState('');

    const renderForm = (text) => {
        setButtonText(text);
        setShowForm(!showForm);
    }

    return(
        <div className='logUser'>
            {!showForm ? (
                <div className='logButtons'>
                    <h1>Welcome!</h1>
                    <p>Be part of us to know what's new in cinema world.</p>
                    <Button className='formButton' variant="outlined" onClick={() => renderForm('Sign in')}>Sign in</Button>
                    <p>or</p>
                    <Button className='formButton' variant="outlined" onClick={() => renderForm('Sign up')}>Sign up</Button>
                </div>
            ) :
            (
                <SignForm formAction={buttonText}/>
            )}
        </div>
    );
}

export default LogUser;