import logo from '../../assets/long-logo.png';
import { useState, useEffect } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import './NavBar.css';

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return(
        <div className='navBar'>
            <figure>
                <img alt="mainLogo" src={logo}/>
            </figure>
            {width >= 700 ? <DesktopMenu/> : <BurgerMenu/>}
        </div>
    );
}

export default NavBar;