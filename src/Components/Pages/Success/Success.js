import React from 'react';
import logo1 from '../../../image/download (3).svg'
import logo2 from '../../../image/download (4).svg'
import logo3 from '../../../image/download (5).svg'
import logo4 from '../../../image/download (6).svg'


const Success = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/hKTFbQg/why-choose-us1.jpg")` }}>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="lg:flex  gap-32">
                    <div>
                        <img src={logo1} className='w-28' alt="" />
                        <h3 className='text-5xl font-bold font-serif'>600</h3>
                        <h3 className='text-2xl font-bold uppercase font-serif'>happiness <br /> customers</h3>
                    </div>
                    <div>
                        <img src={logo2} className='w-28' alt="" />
                        <h3 className='text-5xl font-bold font-serif'>1000</h3>
                        <h3 className='text-2xl font-bold uppercase font-serif'>Project completed</h3>
                    </div>
                    <div>
                        <img src={logo3} className='w-28' alt="" />
                        <h3 className='text-5xl font-bold font-serif'>3000</h3>
                        <h3 className='text-2xl font-bold uppercase font-serif'>world branches</h3>
                    </div>
                    <div>
                        <img src={logo4} className='w-28' alt="" />
                        <h3 className='text-5xl font-bold font-serif'>100</h3>
                        <h3 className='text-2xl font-bold uppercase font-serif'>special winner </h3>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Success;

//<a href="https://ibb.co/RCJTfrg"><img src="https://i.ibb.co/hKTFbQg/why-choose-us1.jpg" alt="why-choose-us1" border="0"></a>