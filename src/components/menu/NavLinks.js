import FavoritesContext from "../../store/FavoritesContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from './NavLinks.module.css';

function NavLinks(props) {
    const favoritesCtx = useContext(FavoritesContext);
    return (
        <ul className={props.open ? classes.mobileMenu : ''}>
            <li key={1}>
                <NavLink to='/' exact activeClassName={classes.active}>All meetups</NavLink>
            </li>
            <li key={2}>
                <NavLink to='/new-meetup' activeClassName={classes.active}>New meetup</NavLink>
            </li>
            <li key={3}>
                <NavLink to='/favorites' activeClassName={classes.active}>Favorites
                            <span className={classes.badge}>
                        {favoritesCtx.totalFavorites}
                    </span>
                </NavLink>
            </li>
        </ul>

    );
}

export default NavLinks;