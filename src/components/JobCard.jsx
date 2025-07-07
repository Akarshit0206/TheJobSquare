import { JobsData } from "../apiReq/index.js";
import {
  BriefcaseBusiness,
  IndianRupee,
  MapPin,
  ArrowRight,
  BookmarkPlus,
  BookmarkCheck,
} from "lucide-react";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import {
  addFavourates,
  removeFavourates,
} from "../functionality/favouratesSlice.js";

function JobCard({ skill, location, minSalary, favObj }) {
  let jobsData = JobsData(skill, location, minSalary);
  const dispatch = useDispatch();

  console.log(jobsData);
  if (jobsData && jobsData.count === 0) {
    return (
      <div className="flex items-center justify-center m-10 ">
        <img
          src="https://img.freepik.com/premium-vector/unemployment-flat-illustration-character-holding-no-job-found-banner_67813-29276.jpg"
          alt="No Jobs..."
          className="rounded-2xl w-9/10 lg:w-2/5 h-auto"
        />
      </div>
    );
    // return <h1>No Jobs Available :( </h1>;
  }

  return (
    <div className="w-full">
      {jobsData ? (
        <div className="w-full text-center text-xl font-semibold p-3">
          <h1>Available jobs: {jobsData.count}</h1>
        </div>
      ) : (
        <div className="w-full h-[400px] flex justify-center items-center">
          <div className="w-[100px] h-[100px] rounded-full border-3 border-sky-600 border-b-white duration-200 animate-spin">
            .
          </div>
        </div>
      )}
      {jobsData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
          {" "}
          {jobsData.results.map((jobDetails) => (
            <div
              className="group w-4/5 max-h-[120px] hover:max-h-[325px] rounded-2xl bg-gradient-to-br from-blue-300 to-violet-300 shadow-zinc-200 shadow-md m-5 p-5 hover:scale-105 transition-all ease-in-out"
              key={jobDetails.id}
            >
              <div className="flex justify-between">
                <h1 className="font-semibold ">{jobDetails.title}</h1>
                {favObj.hasOwnProperty(jobDetails.id) ? (
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(removeFavourates(jobDetails.id));
                    }}
                  >
                    <BookmarkCheck />
                  </button>
                ) : (
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(addFavourates(jobDetails));
                    }}
                  >
                    <BookmarkPlus />
                  </button>
                )}
              </div>
              <h3 className="font-light">
                @ {jobDetails.company.display_name}
              </h3>
              <div className="flex w-full text-sm p-1 m-1">
                <span className="mx-2 flex items-center">
                  <BriefcaseBusiness
                    size={15}
                    color={"#787373"}
                    className="mx-1"
                  />
                  {jobDetails.contract_time
                    ? jobDetails.contract_time
                    : "part_time"}{" "}
                </span>
                |
                <span className="mx-2 flex items-center">
                  <IndianRupee color="#787373" size={15} />
                  {`${jobDetails.salary_min / 100000} - ${jobDetails.salary_max / 100000} lakhs`}
                </span>
                |
                <span className="mx-2 flex items-center">
                  <MapPin color="#787373" size={15} />
                  {jobDetails.location.display_name}
                </span>
              </div>
              <div className="w-full h-auto hidden group-hover:block">
                desc:-
                <p className="text-zinc-700 font-light">
                  {jobDetails.description}
                </p>
              </div>
              <div className="hidden group-hover:flex group-hover:flex-row-reverse">
                <button className="bg-blue-500 rounded-2xl px-3 text-white font-semibold w-auto">
                  <Link
                    to={jobDetails.redirect_url}
                    className="flex items-center"
                  >
                    visit <ArrowRight color="#ffffff" size={20} />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default JobCard;
