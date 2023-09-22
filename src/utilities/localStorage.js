const getJobsFromStorage = () => {
    const appliedJobs = localStorage.getItem('jobs-applied');
    if (appliedJobs){
        return JSON.parse(appliedJobs);
    }
    else{
        return [];
    }
}

const saveJobsToStorage = (id) => {
    const appliedJobs = getJobsFromStorage();
    const exists = appliedJobs.includes(id);
    if(!exists){
        appliedJobs.push(id);
        localStorage.setItem('jobs-applied', JSON.stringify(appliedJobs));
    }
}

export {getJobsFromStorage, saveJobsToStorage}