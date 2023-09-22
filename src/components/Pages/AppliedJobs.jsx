import React, { useEffect, useState } from 'react';
import { getJobsFromStorage } from '../../utilities/localStorage';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(()=> {
        const fetchFunction = async () =>{
            const response = await fetch('jobs.json');
            const data = await response.json();
            setAppliedJobs(data);
            const jobs = [...data]; 
            const selectedJobs = getJobsFromStorage();
            const jobsApplied = jobs.filter(job => selectedJobs.includes(job.id))
            setAppliedJobs(jobsApplied)
        }
        fetchFunction();
    },[])
    return (
        <div>
            <div className='linear-bg h-[300px] flex items-center justify-center'>
                <h3 className='text-[32px] font-extrabold'>Applied Jobs</h3>
            </div>
        </div>
    );
};

export default AppliedJobs;