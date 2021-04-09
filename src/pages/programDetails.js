import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgramDetailsHeader from '../components/ProgramDetailsHeader';
import MentorInfo from '../components/MentorInfo';
import MentorDialog from '../components/MentorDialog';

const ProgramDetailsPage = () => {

    const params = useParams();
    const [programDetails, setProgramDetails] = useState([]);
    const [mentorsList, setMentorsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clickedMentorId, setClickedMentorId] = useState(null);

    useEffect(() => {
        document.title = 'Program Details | Beyond Boundaries';

        const getProgramDetails = async () => {
            const res = await fetch(`http://catalysed-iteration1.el.r.appspot.com/test/programs/${params.id}`);
            const details = await res.json();

            setProgramDetails(details);
            setMentorsList(details.mentors);
            setLoading(false);
        }

        getProgramDetails();
    }, [params.id]);

    return (
        <div>
            {   loading === false ? <>
                    <ProgramDetailsHeader details={programDetails}/>
                    {
                        mentorsList.length !== 0 ?
                        <>
                            <h1 className="container-center h1-list">Participating Mentors List: </h1>
                            <MentorInfo mentors={mentorsList} setClickedMentorId={setClickedMentorId}/>
                        </>
                        : <h1 className="h1-sorry container-center">No Participating Mentors Found.</h1>
                    }
                    { clickedMentorId && <MentorDialog clickedMentorId={clickedMentorId} setClickedMentorId={setClickedMentorId} /> }
                </>
                : <h1 className="h1-sorry container-center">Loading...</h1>
            }
        </div>
    )
}

export default ProgramDetailsPage;
