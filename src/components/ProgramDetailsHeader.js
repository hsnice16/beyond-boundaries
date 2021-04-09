import React from 'react';
import { useHistory } from 'react-router-dom';

import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import { useScroll } from '../custom_hook/useScroll';
import * as ROUTES from '../constants/routes';

const ProgramDetailsHeader = ({ details }) => {

    const scroll = useScroll();
    const history = useHistory();

    const handleClick = () => {
        history.push(ROUTES.PROGRAMS_DIRECTORY);
    }

    return (
        <header className={`header header-pd container ${scroll && 'h-shadow'}`}>
            <FaAngleDoubleLeft onClick={handleClick} className="go-back-icon"/>
            <h1>{details.name}</h1>
            <ul>
                <li><FaAngleDoubleRight className="icon angled-icon" />{' '} 
                    program of category <span>"{details.category}"</span>
                </li>
                <li><FaAngleDoubleRight className="icon angled-icon" />{' '} 
                    {details.shortDescription}
                </li>
                <li><FaAngleDoubleRight className="icon angled-icon" />{' '} 
                    currently in <span>{details.phase.replace('_',' ')}</span> phase</li>
                <li><FaAngleDoubleRight className="icon angled-icon" />{' '} 
                    start date of program: <span>{details.startDate}</span>
                </li>
                <li><FaAngleDoubleRight className="icon angled-icon" />{' '} 
                    duration of program: <span>{details.duration}</span>
                </li>
                <li><FaAngleDoubleRight className="icon angled-icon" />{' '} 
                    seats in program: <span>{details.programSize}</span>
                </li>
            </ul>
        </header>
    )
}

export default ProgramDetailsHeader;
