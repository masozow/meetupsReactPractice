import { useState } from 'react';
import MenuButton from '../menu/MenuButton';
import NavLinks from '../menu/NavLinks';
import classes from './MainNavigation.module.css';


function MainNavigation(props) {
    const [isOpen, setIsOpen] = useState(false);
    function handleIsOpen() {
        setIsOpen(!isOpen);
    }
    return (
        <header>
            <div className={classes.logo}>
                Meetups
            </div>
            <MenuButton handleClick={handleIsOpen} open={isOpen} />
            <NavLinks open={isOpen} />
        </header>
    );
}

export default MainNavigation;