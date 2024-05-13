import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people4 from '../../../assets/images/people4.jpeg';
import people5 from '../../../assets/images/people5.jpeg';
import people6 from '../../../assets/images/people6.jpeg';
import people7 from '../../../assets/images/people7.jpeg';
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Sabrina Mehajabien',
            img: people4,
            review: 'I recently had an in-office teeth whitening treatment, and I couldnt be happier with the results! After years of drinking coffee and tea, my teeth had become noticeably stained, and I was self-conscious about my smile. I decided to give professional whitening a try, and I am so glad I did.',
            location: 'Dhaka'
        },
        {
            _id: 2,
            name: 'Khorshed Alam',
            img: people5,
            review: 'From start to finish, the experience was smooth and comfortable, and I am impressed with the level of care I received.',
            location: 'Narsingdi'
        },
        {
            _id: 3,
            name: 'Radowan Islam',
            img: people6,
            review: 'After the treatment, I immediately noticed an improvement in the way my teeth felt. They seemed smoother and more resilient, and I experienced less sensitivity when eating or drinking hot or cold foods. Over time, I have also noticed a reduction in plaque buildup and a healthier appearance to my teeth overall.',
            location: 'Gazipur'
        },
        {
            _id: 4,
            name: 'Nadim Mahamud Emon',
            img: people7,
            review: 'From start to finish, the experience was smooth and comfortable, and I am impressed with the level of care I received.',
            location: 'Narsingdi'
        },
    ]


    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" srcset="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;