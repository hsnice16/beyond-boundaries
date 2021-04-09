import React from 'react';
import { Link } from 'react-router-dom';

import { FaAngleDoubleRight } from 'react-icons/fa';
import * as ROUTES from '../constants/routes';

const ProgramCards = ({ program }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="p-name user-agent">{program.name}</h1>
            </div>

            <div className="card-body">
                <h3 className="p-category user-agent">{program.category}</h3>
                <small className="p-phase user-agent">{(program.phase).replace('_', ' ')}</small>
                <p className="p-description user-agent">{program.shortDescription}</p>
            </div>

            <div>
                <div className="date-duration">
                    <small className="p-date">Start Date: {program.startDate}</small>
                    <small className="p-duration">Duration: {program.duration}</small>
                </div>
                <Link to={`${ROUTES.PROGRAM_DETAILS}/${program.id}`}>
                    <button className="card-button">
                        Details <FaAngleDoubleRight className="icon angled-icon" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProgramCards;
