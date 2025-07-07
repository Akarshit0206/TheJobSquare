import { useEffect, useState } from "react";

function CompaniesData(jobRole) {
  const [companiesData, setCompaniesData] = useState("-999");
  useEffect(() => {
    const getCompaniesData = async () => {
      if (jobRole.trim()) {
        await fetch(
          `https://api.adzuna.com/v1/api/jobs/in/top_companies?app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}&what=${jobRole}&content-type=application/json`,
        )
          .then((res) => res.json())
          .then((res) => setCompaniesData(res))
          .catch("Error in fetch the Data");
      }
    };
    getCompaniesData();
  }, [jobRole]);

  return companiesData;
}

export default CompaniesData;
