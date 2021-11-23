import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { pink } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import './Employee.css';

const Employee = ({personInfo}) => {
    return(
        <div className='employee'>
            <img alt='employee' src={personInfo.image}/>
            <h4>{personInfo.name}</h4>
            <div className='socialIcons'>
                <InstagramIcon sx={{ color: pink[600] }}/>
                <TwitterIcon sx={{ color: blue[800] }}/>
            </div>
        </div>
    );
}

export default Employee;