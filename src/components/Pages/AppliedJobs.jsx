import React, { useEffect, useState } from "react";
import { getJobsFromStorage } from "../../utilities/localStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const fetchFunction = async () => {
      const response = await fetch("jobs.json");
      const data = await response.json();
      setAppliedJobs(data);
      const jobs = [...data];
      const selectedJobs = getJobsFromStorage();
      const jobsApplied = jobs.filter((job) => selectedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    };
    fetchFunction();
  }, []);

  const handleFilter = filter => {
    if (filter === "All"){
      setDisplayJobs(appliedJobs);
    }
    else if (filter === "Remote") {
      const jobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
      setDisplayJobs(jobs);
    }
    else if (filter === "Onsite") {
      const jobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
      setDisplayJobs(jobs);
    }
  
  }

  return (
    <div>
      <div className="linear-bg h-[300px] flex items-center justify-center">
        <h3 className="text-[32px] font-extrabold">Applied Jobs</h3>
      </div>
      <div className="my-[130px] max-w-[1320px] mx-auto">
        <div className="flex justify-end">
          <details className="dropdown">
            <summary className="m-1 btn capitalize">
              Filter By{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 8.25L12 15.75L4.5 8.25"
                  stroke="#474747"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a onClick={()=> handleFilter('All')}>All</a>
              </li>
              <li>
                <a onClick={()=> handleFilter('Remote')}>Remote</a>
              </li>
              <li>
                <a onClick={()=>handleFilter("Onsite")}>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
