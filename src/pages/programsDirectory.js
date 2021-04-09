import React, { useEffect, useState } from 'react'

import SearchBar from '../components/SearchBar';
import ProgramsInfo from '../components/ProgramsInfo';

const ProgramsDirectoryPage = () => {
    const [totalPrograms, setTotalPrograms] = useState([]) ;
    const [programs, setPrograms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Directory | Beyond Boundaries';

        const getPrograms = async () => {
            const programsList = await fetchProgramsList();
            setIsLoading(false);
            setTotalPrograms(programsList);
            setPrograms(programsList);
        }

        getPrograms();
    }, []);

    // Fetch Programs List
    const fetchProgramsList = async () => {
        const res = await fetch('http://catalysed-iteration1.el.r.appspot.com/test/programs/');
        const data = await res.json()

        return data;
    }

    return (
        <div>
            <SearchBar totalPrograms={totalPrograms} programs={programs} setPrograms={setPrograms} isLoading={isLoading}/>
            {
                isLoading === false ?
                    <ProgramsInfo programs={programs}/>
                : <h1 className="h1-sorry container-center">Loading...</h1>
            }
        </div>
    )
}

export default ProgramsDirectoryPage ;
