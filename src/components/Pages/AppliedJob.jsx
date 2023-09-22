import React from 'react';
import {AiOutlineDollar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job; 
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/jobs/${id}`)
    }

    return (
        <div className='p-8 border-[#E8E8E8] border rounded-lg my-6 flex justify-between items-center'>
            <div className='flex gap-8'>
                <div className='bg-[#F4F4F4] w-[240px] h-[240px] px-7 flex justify-center items-center'>
                    <img src={logo} alt="" />
                    </div>
                <div>
                    <h3 className='mt-4 mb-1 text-[#474747] text-2xl font-extrabold'>{job_title}</h3>
                    <h5 className='text-xl font-semibold text-[#757575]'>{company_name}</h5>
                    <div className='my-4 linear-text font-extrabold'>
                        <button className='px-5 py-2 rounded-md border border-[#7E90FE] mr-2'>{remote_or_onsite}</button>
                        <button className='px-5 py-2 rounded-md border border-[#7E90FE]'>{job_type}</button>
                    </div>
                    <div className='flex gap-4'>
                        <p className='flex items-center gap-1 text-[#757575]'><MdOutlineLocationOn className='text-2xl'/> <span className='text-xl font-semibold'>{location}</span></p>
                        <p className='flex items-center gap-1 text-[#757575]'><AiOutlineDollar className='text-2xl'/> <span className='text-xl font-semibold'>{salary}</span></p>
                    </div>

                </div>

            </div>
            
            <button  onClick={handleViewDetails} className="mt-6 btn capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
        </div>
    );
};

export default AppliedJob;