import { useContext } from 'react';
import FavoritesContext from '../../store/FavoritesContext';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.isFavorite(props.id);

    function onFavoritesToggle() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({ ...props });
        }
    }

    return (
        <Card>
            <li>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={onFavoritesToggle}>
                        {itemIsFavorite ? 'Remove from favorites' : 'To favorites'}
                    </button>
                </div>
            </li>
        </Card>
    );
}

export default MeetupItem;