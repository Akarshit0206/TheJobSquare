import { useState, useEffect } from "react";

function JobsData(
  skill = "java developer",
  location = "delhi",
  minSalary = "1000000",
) {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    async function getJobsData() {
      try {
        const res = await fetch(
          `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&results_per_page=20&what=${skill}&where=${location}&salary_min=${minSalary}&sort_by=salary`,
        );
        if (!res.ok) throw new Error(`fetching failed`);
        const data = await res.json();
        return data;
      } catch (e) {
        console.error(`Error: ${e}`);
        setJobData("-999");
      }
    }
    getJobsData().then((res) => setJobData(res));
  }, [skill, location, minSalary]);
  return jobData;
}

export default JobsData;
