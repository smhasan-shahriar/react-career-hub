import React from 'react';
const Banner = () => {
    return (
        <div className='flex gap-[70px] justify-between pt-10 items-center linear'>
            {/* text section */}
            <div className='w-1/2'>
                <h2 className='text-[80px] font-extrabold leading-tight'>One Step Closer To Your <br /><span className='linear-text'>Dream Job</span></h2>
                <p className='text-[#757575] mb-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
            </div>
            {/* picture section  */}
            <div className='w-1/2'>
                <img src="images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;