import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/MeetupsList";

function AllMeetupsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [meetupsData, setMeetupsData] = useState([]);

    function objectToArray(obj) {
        const arrayHelper = [];
        for (const key in obj) {
            const element = {
                id: key,
                ...obj[key]
            }
            arrayHelper.push(element);
        }
        return arrayHelper;
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-course-859cd-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            setMeetupsData(objectToArray(data));
            setIsLoading(false);
        });
    }, [])
    return (
        <>
            <h1>All meetups</h1>
            {isLoading ? <p>Loading...</p> : <MeetupsList meetups={meetupsData} />}
        </>
    );
}

export default AllMeetupsPage;