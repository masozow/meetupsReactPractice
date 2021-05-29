import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const inputTitle = titleInputRef.current.value;
        const inputImage = imageInputRef.current.value;
        const inputAddress = addressInputRef.current.value;
        const inputDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: inputTitle,
            image: inputImage,
            address: inputAddress,
            description: inputDescription
        }
        props.onSubmit(meetupData);
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' required ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image URL</label>
                    <input type='url' id='image' required ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' required ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Save</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;