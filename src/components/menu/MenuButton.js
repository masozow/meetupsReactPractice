import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import classes from './MenuButton.module.css';

function MenuButton(props) {
    return (
        <div className={classes.menuButton}>
            {
                props.open ?
                    <FontAwesomeIcon icon={faTimes} size='lg' color='white' onClick={props.handleClick} /> :
                    <FontAwesomeIcon icon={faBars} size='lg' color='white' onClick={props.handleClick} />
            }
        </div>
    );
}

export default MenuButton;
