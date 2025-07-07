import { useEffect, useState } from "react";

function LogoData(company) {
  const [logoData, setLogoData] = useState(null);
  useEffect(() => {
    const getCompaniesData = async () => {
      await fetch(`https://api.logo.dev/search?q=${company}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_LOGO_AUTH}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setLogoData(res))
        .catch("Error in fetch the Data");
    };
    getCompaniesData();
  }, [company]);

  return logoData;
}

export default LogoData;
