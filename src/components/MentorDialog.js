import React, { useState, useEffect } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

const MentorDialog = ({ clickedMentorId, setClickedMentorId }) => {
 
    const [working, setWorking] = useState(true);
    const [mentorDetails, setMentorDetails] = useState([]);

    useEffect(() => {

        const getDetails = async () => {
            const res = await fetch(`http://catalysed-iteration1.el.r.appspot.com/test/mentors/${clickedMentorId}`);
            const data = await res.json();
            setMentorDetails(data);
            setWorking(false);
        }

        getDetails();
    }, [clickedMentorId]);


    return (
        <div className="dialog-container card mentor-card">
            <FaRegTimesCircle className="cross-icon" onClick={() => setClickedMentorId(null)} />
            {
                working ?
                    <h1 className="h1-sorry">Working On It...</h1>
                :
                    <>
                        <div className="dialog-img">
                            <img src={mentorDetails.profilePic} alt="Profile pic of mentor"/>
                        </div>
                        <div className="dialog-body">
                            <h1 className="p-name user-agent">{mentorDetails.firstName} {mentorDetails.lastName}</h1>
                            <small className="p-category user-agent">{mentorDetails.email}</small>
                            <div className="dialog-subbody">
                                <h4 className="user-agent">Gender: <span>{mentorDetails.gender}</span></h4>
                                <h4 className="user-agent m-top">Location: <span>{mentorDetails.location}</span></h4>
                                <h4 className="user-agent m-top">Working Hours: </h4>
                                <div className="working-hours">
                                    <small className="">Start Time: <span className="">{mentorDetails.workingHours.startTime}</span></small>
                                    <small className="">End Time: <span className="">{mentorDetails.workingHours.endTime}</span></small>
                                </div>
                                <h4 className="user-agent m-top">Specializations:{' '}</h4>
                                <ul className="list-non-bullet mentor-spec">
                                    {
                                        (mentorDetails.specializations).length === 0 ?
                                            <li className="p-phase list-item-inline">not known</li>
                                        : (mentorDetails.specializations).map(item => (
                                            <li key={item} className="p-phase list-item-inline">{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default MentorDialog;
