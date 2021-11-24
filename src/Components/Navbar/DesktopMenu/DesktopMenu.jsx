import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import {BlogContext} from '../../Context/Context';
import './DesktopMenu.css';

const DesktopMenu = () => {
    const pageNames = ['about', 'articles', 'create'];
    const {userInfo, deleteUserInformation} = useContext(BlogContext);
    const [selectedPage, setSelectedPage] = useState(!!userInfo.username ? 'about' : 'register');

    const handleChange = (e, newSelectedPage) => {
        if(newSelectedPage === 'logOut') return;
        setSelectedPage(newSelectedPage);
    }
    
    return(
        <Tabs className='desktopNav' value={selectedPage} 
            onChange={(e, selectedPage) => handleChange(e, selectedPage)}>
            {
                pageNames.map((name) => 
                <Tab key={name} 
                value={name} 
                label={name} 
                to={`/${name}`} 
                component={Link} />)
            }
            {
                !!userInfo.username ? 
                <Tab value='logOut' 
                label={`Log out ${userInfo.username}`} 
                to='/logUser' component={Link} 
                onClick={() => deleteUserInformation()}/>
                : 
                <Tab value='register' 
                label='Register' 
                to='/logUser' 
                component={Link}/>
            }
        </Tabs>
    );
}

export default DesktopMenu;