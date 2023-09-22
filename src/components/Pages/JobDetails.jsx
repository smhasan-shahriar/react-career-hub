import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobsToStorage } from '../../utilities/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId)
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;

    const handleSelectJob =() =>{
        saveJobsToStorage(intId);
        toast('You have successfully applied for this job');
    }

    return (
        <div>
            <div className='linear-bg h-[300px] flex items-center justify-center'>
                <h3 className='text-[32px] font-extrabold'>Job Details</h3>
            </div>
            <div className='max-w-[1320px] mx-auto my-[130px] flex gap-6 justify-between'>
                <div className='w-2/3 space-y-6'>
                    <p><span className='font-extrabold text-[#1A1919]'>Job Description:</span> <span className='text-[#757575] font-medium'>{job_description}</span></p>
                    <p><span className='font-extrabold text-[#1A1919]'> Job Responsibility:</span><span className='text-[#757575] font-medium'>{job_responsibility}</span></p>
                    <p><span className='font-extrabold text-[#1A1919]'>Educational Requirements:</span><br /> <span className='text-[#757575] font-medium'>{educational_requirements}</span></p>
                    <p><span className='font-extrabold text-[#1A1919]'>Experiences:</span><br /> <span className='text-[#757575] font-medium'>{experiences}</span></p>
                </div>
                <div className='w-1/3'>
                    <div className='linear-bg-details  py-7 px-4'>
                        <h2 className='text-xl font-extrabold'>Job Details</h2>
                        <hr className='my-6 linear-bg border-2'/>
                        <div>
                            <div className='flex gap-2'>
                                <div><img src="/public/icons/money.png" alt="" /></div>
                                <div>
                                    <span className='font-bold text-xl'>Salary: </span><span className='text-[#757575] font-medium text-xl'>{salary}(Per Month)</span>
                                </div>
                            </div>
                            <div className='flex gap-2 my-4'>
                                <div><img src="/public/icons/calendar.png" alt="" /></div>
                                <div>
                                    <span className='font-bold text-xl'>Job Title: </span><span className='text-[#757575] font-medium text-xl'>{job_title}</span>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-xl font-extrabold mt-8'>Contact Information</h2>
                        <hr  className='my-6 linear-bg border-2'/>
                        <div>
                        <div className='flex gap-2'>
                                <div><img src="/public/icons/phone.png" alt="" /></div>
                                <div>
                                    <span className='font-bold text-xl'>Phone: </span><span className='text-[#757575] font-medium text-xl'>{contact_information.phone}</span>
                                </div>
                            </div>
                        <div className='flex gap-2 my-4'>
                                <div><img src="/public/icons/email.png" alt="" /></div>
                                <div>
                                    <span className='font-bold text-xl'>Email: </span><span className='text-[#757575] font-medium text-xl'>{contact_information.email}</span>
                                </div>
                            </div>
                        <div className='flex gap-2'>
                                <div><img src="/public/icons/location2.png" alt="" /></div>
                                <div>
                                    <span className='font-bold text-xl'>Address: </span><span className='text-[#757575] font-medium text-xl'>{contact_information.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSelectJob} className="mt-6 btn capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full text-xl">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;