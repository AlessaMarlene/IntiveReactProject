import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './CreateArticleForm.css';

const CreateArticleForm = ({formData, handleChange, handleSubmit, selectedScore}) => {
    return(
        <form className='createArticleForm'>
            <TextField 
            value={formData.title} 
            name='title' 
            label="Title" 
            variant="outlined" 
            onChange={handleChange}/>

            <TextField
            name='body'
            label="Write your review...'"
            multiline
            value={formData.body} onChange={handleChange}/>

            <TextField
            select
            value={selectedScore}
            label="Select"
            onChange={handleChange}
            helperText="Select a score"
            name='score'>
                <MenuItem value='1'>1</MenuItem>
                <MenuItem value='2'>2</MenuItem>
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='4'>4</MenuItem>
                <MenuItem value='5'>5</MenuItem>
            </TextField>

            <Button 
            variant="outlined" 
            onClick={handleSubmit}>Create new article</Button>
        </form>
    );
}

export default CreateArticleForm;