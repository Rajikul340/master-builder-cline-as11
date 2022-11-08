import React from 'react';
import img1 from '../../../image/blog-grid-2.jpg'

const TeamSection = () => {
    return (
        <div className='my-14'>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-6/12'>
                        <img src={img1} className="max-w-sm rounded-lg shadow-2xl imgSize" />
                    </div>
                    <div className='lg:w-6/12'>
                        <h1 className="text-5xl font-bold">Work With Our Team</h1>
                        <p className="py-6">How does an
                            Working together as a team allows employees to draw from each other's experience and knowledge and further encourage communication and support within the workshop. Improved business productivity because everyone achieves and enjoys success once a goal is reached or a project is completed.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;