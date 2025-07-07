import { CompaniesData, LogoData } from "../apiReq/index.js";
import { CompanyCardImage, CompanyLink } from "./index.js";
import { Link } from "react-router";

function CompanyCard({ job }) {
  const companiesData = CompaniesData(job);

  if (companiesData === "-999")
    return (
      <div className="flex justify-center items-center m-10">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/422/113/non_2x/accountant-and-his-finances-concept-art-free-vector.jpg"
          alt="Search..."
          className="rounded-2xl w-1/2 h-auto"
        />
      </div>
    );
  if (companiesData) {
    if (companiesData.leaderboard.length === 0)
      return (
        <div className="flex items-center justify-center m-10">
          <img
            src="https://img.freepik.com/premium-vector/unemployment-flat-illustration-character-holding-no-job-found-banner_67813-29276.jpg"
            alt="No Jobs..."
            className="rounded-2xl w-4/5 h-auto"
          />
        </div>
      );
  }
  return (
    <div className="w-full flex flex-wrap gap-10  mt-5 justify-center">
      {companiesData
        ? companiesData.leaderboard.map((company, index) => (
            <div
              className=" group 3/5 md:2/5 lg:w-1/5 min-w-[244px] h-auto shadow-zinc-800 shadow-md p-3 rounded-2xl hover:border-2 hover:scale-105 hover:bg-gradient-to-tl hover:from-blue-400 hover:to-violet-300 transition-all"
              key={company.canonical_name}
            >
              <span className="text-gray-400 group-hover:text-white group-hover:font-semibold">
                #
              </span>
              <p className="inline font-light text-gray-400 underline underline-offset-2 decoration-gray-300 group-hover:text-white group-hover:font-semibold">
                Rank-{index + 1}
              </p>

              <div className="w-full flex flex-col justify-center items-center my-3">
                <CompanyCardImage companyName={company.canonical_name} />
                <h1 className="my-3 font-semibold text-lg">
                  {company.canonical_name}
                </h1>
              </div>
              <span className="hidden text-gray-400 underline underline-offset-2 mr-3 group-hover:font-semibold group-hover:text-white group-hover:inline">
                Total Vacancies:
              </span>
              <p className="hidden group-hover:font-semibold group-hover:inline">
                {company.count}
              </p>
              <CompanyLink companyName={company.canonical_name} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}

export default CompanyCard;
