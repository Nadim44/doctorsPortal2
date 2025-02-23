import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass}=card;
    return (
        <div className={`card text-white px-6 md:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;