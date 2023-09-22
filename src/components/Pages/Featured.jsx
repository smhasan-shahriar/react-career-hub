import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';




const Featured = () => {

    const [jobs, setJobs] = useState([]);
    const [allClicked, setAllClicked] = useState(false)

    useEffect(()=> {
        const fetchFunction = async () => {
            const response = await fetch('jobs.json');
            const data = await response.json();
            setJobs(data);
        }
        fetchFunction();
    }, [])

    const handleShowAll = () => {
        setAllClicked(true);
    }

    return (
        <div className='mb-28'>
            <div className='mt-[130px] text-center'>
                <h3 className='text-5xl font-extrabold m-4'>Featured Jobs</h3>
                <p className='text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* cards container  */}
            <div className='grid grid-cols-2 gap-6 my-8'>
                {
                    allClicked ? jobs.map(job => <JobCard key={job.id} job={job}></JobCard>): jobs.slice(0,4).map(job => <JobCard key={job.id} job={job}></JobCard>)
                }
            </div>
            <div className= {allClicked ? 'hidden text-center' : 'text-center'}>
                <button onClick={handleShowAll} className="mt-6 btn capitalize bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;