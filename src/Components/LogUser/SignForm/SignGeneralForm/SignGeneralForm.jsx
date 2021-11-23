import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignGeneralForm.css';

const SignGeneralForm = ({handleChange, handleSubmit, buttonAction}) => {
    return(
        <form className='loggingForm'>
            <TextField 
            className='logginField' 
            name='username' 
            label="Username" 
            variant="outlined" 
            onChange={handleChange}/>

            <TextField 
            className='logginField' 
            name='password' 
            label="Password" 
            variant="outlined" 
            type="password" 
            onChange={handleChange}/>

            <Button 
            className='formButton' 
            variant="outlined" 
            onClick={handleSubmit}>{buttonAction}</Button>
        </form>
    );
}

export default SignGeneralForm;