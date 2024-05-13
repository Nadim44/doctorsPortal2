import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardDate=[
        {
            id:1,
            name:'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm Everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id:2,
            name:'Our Locations',
            description: 'Narsingdi, Dhaka',
            icon: marker,
            bgClass: 'bg-secondary'
        },
        {
            id:3,
            name:'Contact Us',
            description: '+880 1568274336',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]

    return (
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardDate.map(card=><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;