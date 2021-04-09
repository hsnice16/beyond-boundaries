import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

import { useScroll } from '../custom_hook/useScroll';

const SearchBar = ({ totalPrograms, programs, setPrograms, isLoading }) => {

    const scrolled = useScroll();

    const handleSubmit = (event) => {
        event.preventDefault();

        const searchProgramName = document.getElementById('search').value;
        
        if(searchProgramName) {
            setPrograms(
                programs.filter(program => 
                    program.name.toLowerCase().includes(searchProgramName)
                )
            );
        }
        else {
            setPrograms(totalPrograms);
        }
    }

    const handleClick = () => {
        const allPhase = document.getElementsByName('phase');
        const checkedPhaseValue = [];

        allPhase.forEach(phase => {
            if(phase.checked) {
                checkedPhaseValue.push(phase.value);
            }
        });

        setPrograms(checkedPhaseValue.length ?
            totalPrograms.filter(
                program => checkedPhaseValue.includes(program.phase.toLowerCase())
            )
            : totalPrograms
        );
    }

    return (
        <header className={`container header header-sb ${scrolled && 'h-shadow'}`}>
            <form className="container container-center" onSubmit={handleSubmit}>
                <div className="type-search">
                    <AiOutlineSearch className="icon"/>
                    <input id="search" disabled={isLoading} type="search" placeholder="search by program name"/>
                </div>
                <div className="checkbox-container">
                    <div className="d-inline">
                        <input type="checkbox" disabled={isLoading} onClick={handleClick} name="phase" id="open_application" value="application_open"/>
                        <label htmlFor="open_application">Open Application</label>
                    </div>
                    <div className="d-inline">
                        <input type="checkbox" disabled={isLoading} onClick={handleClick} name="phase" id="application_in_review" value="application_review"/>
                        <label htmlFor="application_in_review">Application in Review</label>
                    </div>
                    <div className="d-inline">
                        <input type="checkbox" disabled={isLoading} onClick={handleClick} name="phase" id="in_progress" value="in_progress"/>
                        <label htmlFor="in_progress">in Progress</label>
                    </div>
                    <div className="d-inline">
                        <input type="checkbox" disabled={isLoading} onClick={handleClick} name="phase" id="completed" value="completed"/>
                        <label htmlFor="completed">Completed</label>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default SearchBar;
