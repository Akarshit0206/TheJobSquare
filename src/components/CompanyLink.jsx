import { Link } from "react-router";
import { LogoData } from "../apiReq/index.js";
import { MoveRight } from "lucide-react";

function CompanyLink({ companyName }) {
  const data = LogoData(companyName);

  return data && data.length !== 0 ? (
    <Link to={`https://${data[0].domain}`}>
      <div className="hidden bg-blue-700 w-full text-center text-white my-3 font-semibold group-hover:block rounded-full hover:cursor-pointer">
        <span>visit </span>
        <MoveRight className="inline" />
      </div>
    </Link>
  ) : (
    <div className="hidden bg-blue-700 w-full text-center text-white my-3 font-semibold group-hover:block rounded-full hover:cursor-pointer">
      <span>...</span>
    </div>
  );
}

export default CompanyLink;
