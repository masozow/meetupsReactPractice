import MeetupItem from './MeetupItem';
import classes from './MeetupsList.module.css';

function MeetupsList(props) {
    return (
        <ul className={classes.list}>
            {
                props.meetups.map((meetup) => {
                    return (
                        <MeetupItem
                            key={meetup.id}
                            id={meetup.id}
                            title={meetup.title}
                            image={meetup.image}
                            address={meetup.address}
                            description={meetup.description}
                        />
                    );
                })
            }
        </ul>
    );
}

export default MeetupsList;