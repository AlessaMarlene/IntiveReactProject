import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import {BlogContext} from "../../Context/Context";
import { singUpUser, singInUser } from "../../../utils/requests";
import SignGeneralForm from "./SignGeneralForm/SignGeneralForm";
import './SignForm.css';

const SignForm = ({formAction}) => {
    const initialFormData = {
        username: '',
        password: '',
        roles: []
    }
    
    const navigate = useNavigate();
    const {setUserInformation} = useContext(BlogContext);
    const [formData, updateFormData] = useState(initialFormData);
    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        updateFormData({
          ...formData, [e.target.name]: e.target.value.trim()
        });
    }

    function assignUserInfoToContext(username, tokenSession, roles){
        setUserInformation({username, tokenSession, roles})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let userInfo;

            if(formAction === 'Sign up') { 
                userInfo = await singUpUser(formData.username, formData.password)
            }
            else {
                userInfo = await singInUser(formData.username, formData.password);
            }
            assignUserInfoToContext(userInfo.username, userInfo.tokenSession, userInfo.roles);
            navigate('/about');
        }catch(error){
            setShowError(true);
        }
    };
    
    return(
        <div className='signForm'>
            <h1>Welcome!</h1>
            
            <SignGeneralForm 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            buttonAction={formAction}/>

            {showError && <p className='signFormError'>Something went wrong. Try again.</p>}
        </div>
    );
}

export default SignForm;