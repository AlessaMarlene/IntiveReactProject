import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {Link} from 'react-router-dom'
import {BlogContext} from '../../../Context/Context';
import { useContext } from "react";
import './BurgerNavItems.css';

const BurgerNavItemsu = ({handleChange}) => {
    const {userInfo, deleteUserInformation} = useContext(BlogContext);
    const pageNames = ['about', 'articles', 'create'];

    return(
        <Box sx={{ width: 250 }} onClick={() => handleChange(false)}>
            <List>
                {pageNames.map((text) => 
                    <ListItem className='navBurgerLink' button key={text} component={Link} to={`/${text}`}>
                        <ListItemText primary={text}/>
                    </ListItem>
                )}

                {
                    !userInfo.username ? 

                    <ListItem className='navBurgerLink' component={Link} to='/logUser' button>
                        <ListItemText primary='Register'/>
                    </ListItem>
                    : 
                    <ListItem className='navBurgerLink' component={Link} to='/logUser' onClick={() => deleteUserInformation()} button>
                        <ListItemText primary={`Log out ${userInfo.username}`}/>
                    </ListItem>
                }
            </List>
        </Box>
    );
}

export default BurgerNavItemsu;