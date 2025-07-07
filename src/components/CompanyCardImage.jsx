import { LogoData } from "../apiReq/index.js";

function CompanyCardImage({ companyName }) {
  const fullData = LogoData(companyName);
  return (
    <>
      {fullData && fullData.length > 0 ? (
        <img
          src={fullData[0].logo_url}
          alt={fullData[0].name}
          className="w-30 h-30 rounded-full"
        />
      ) : (
        <img
          src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
          alt="companyImage"
          className="w-30 rounded-full"
        />
      )}
    </>
  );
}

export default CompanyCardImage;
