import React from 'react';

const MentorCards = ({ mentor, setClickedMentorId }) => {


    return (
        <div className="card mentor-card" onClick={() => setClickedMentorId(mentor.id)}>
            <div className="card-header">
                <img src={mentor.profilePic} alt="mentor pic" />
                <h1 className="p-name user-agent">{mentor.firstName} {mentor.lastName}</h1>
            </div>

            <div className="card-body">
                <small className="p-category user-agent">{mentor.email}</small>
                <p className="p-description user-agent">specializations:{' '}</p>
                <ul className="list-non-bullet mentor-spec user-agent">    
                    {
                        (mentor.specializations).length === 0 ?
                            <li className="p-phase list-item-inline">not known</li>
                        : (mentor.specializations).map(item => (
                            <li key={item} className="p-phase list-item-inline">{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default MentorCards;
