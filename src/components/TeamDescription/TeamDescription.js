import React from 'react';
import './TeamDescription.css'

const TeamDescription = (props) => {
    const { strDescriptionEN } = props.teamInfo;
    return (
        <div className="teamDes">
            <div className="container">
                <p>{strDescriptionEN}</p>
            </div>
        </div>
    );
};

export default TeamDescription;