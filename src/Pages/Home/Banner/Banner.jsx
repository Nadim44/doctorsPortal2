import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">It suggests that the clinic or practice is dedicated to helping people achieve a better smile through various dental treatments and procedures.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;