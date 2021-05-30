import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoritesContext from "../../store/FavoritesContext";
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header>
            <div className={classes.logo}>
                Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName={classes.active}>All meetups</NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-meetup' activeClassName={classes.active}>New meetup</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites' activeClassName={classes.active}>Favorites
                            <span className={classes.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;