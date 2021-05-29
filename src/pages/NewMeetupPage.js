import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(props) {
    const history = useHistory();

    function handleSubmit(meetup) {
        fetch(
            'https://react-course-859cd-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetup),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    };

    return (
        <>
            <h1>New Meetup</h1>
            <NewMeetupForm onSubmit={handleSubmit} />
        </>
    );
}

export default NewMeetupPage;