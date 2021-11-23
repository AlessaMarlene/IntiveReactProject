import { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import BurgerNavItems from './BurgerNavItems/BurgerNavItems';

const BurgerMenu = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const toggleMenu = (open) => {
        setDisplayMenu(open);
    };

    return(
        <div>
            <MenuIcon onClick={() => toggleMenu(true)} />
            <Drawer anchor="right" open={displayMenu} onClose={() => toggleMenu(false)}>
                <BurgerNavItems handleChange={toggleMenu}/>
            </Drawer>
        </div>
    );
}

export default BurgerMenu;