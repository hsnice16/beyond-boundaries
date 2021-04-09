import React from 'react';
import MentorCards from './MentorCards';

const MentorInfo = ({ mentors, setClickedMentorId }) => {

    return (
        <main className="min-h-80">
            <section className="card-container">
                {
                    mentors.map(mentor => (
                        <MentorCards key={mentor.id} mentor={mentor} setClickedMentorId={setClickedMentorId} />
                    ))
                }
            </section>
        </main>
    )
}

export default MentorInfo;
