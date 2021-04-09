import React from 'react';
import ProgramCards from './ProgramCards';

const ProgramsInfo = ({ loading, programs }) => {
    return (
        <main className="min-h-80">
            <section className="card-container">
                {   
                    programs.length !== 0 ? programs.map((program) => (
                        <ProgramCards key={program.id} program={program} />
                    ))
                    : <h1 className="h1-sorry">Sorry !!!, No Programs Found</h1>
                }
            </section>
        </main>
    )
}

export default ProgramsInfo;
