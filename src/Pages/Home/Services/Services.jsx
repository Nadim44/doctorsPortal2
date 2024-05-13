import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'The primary purpose of fluoride treatment is to prevent tooth decay by making teeth more resistant to acid attacks from plaque bacteria and sugars in the mouth ',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'By filling the cavity, the dentist removes the decayed portion of the tooth and seals the area to prevent further decay and restore the tooths integrity',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth whitening',
            description: 'The primary purpose of teeth whitening is to enhance the appearance of the teeth by making them appear whiter and brighter. It can help to boost confidence and improve self-esteem by creating a more attractive smile.',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-primary uppercase text-xl font-bold'>Our Services</h3>
                <h2 className='text-3xl'>Services We provide</h2>
            </div>
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;