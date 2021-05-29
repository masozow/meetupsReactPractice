import { useContext } from "react";
import MeetupsList from "../components/meetups/MeetupsList";
import FavoritesContext from "../store/FavoritesContext";

function FavoritesPage(props) {
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupsList meetups={favoritesCtx.favorites} />
    }
    return (
        <>
            <h1>Favorites</h1>
            {content}
        </>
    );
}

export default FavoritesPage;