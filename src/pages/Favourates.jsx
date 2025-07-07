import { useSelector, useDispatch } from "react-redux";
import { removeFavourates } from "../functionality/favouratesSlice.js";
import {
  BookmarkCheck,
  IndianRupee,
  BriefcaseBusiness,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";

function Applicants() {
  const favObj = useSelector((state) => state.favourates);
  const ids = Object.keys(favObj);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(favObj).length)
      localStorage.setItem("favourates", JSON.stringify(favObj));
  }, [favObj]);

  return (
    <div className="w-full flex gap-10 flex-wrap justify-center mt-5">
      {ids.map((id) => (
        <div
          className="rounded-lg w-[300px] bg-amber-50 shadow-stone-200 shadow-lg flex flex-col pb-5"
          key={id}
        >
          <div className="bg-blue-600 h-[128px] rounded-lg p-3">
            <div className="flex flex-row-reverse">
              <button
                onClick={() => {
                  dispatch(removeFavourates(id));
                }}
                className="cursor-pointer text-right"
              >
                <BookmarkCheck />
              </button>
            </div>
            <div className="w-full text-center">
              <h1 className="text-xl inline ">{favObj[id].title}</h1>
              <h1>@{favObj[id].companyName}</h1>
            </div>
          </div>
          <div className="text-center mt-5">
            <h1>
              Salary:{"  "}
              <IndianRupee className="inline text-zinc-800" size={18} />
              {""}
              {favObj[id].salary_min}-{favObj[id].salary_max}
            </h1>
            <h1>
              Stauts:
              <BriefcaseBusiness
                className="inline text-zinc-800 mx-2"
                size={18}
              />
              {""}
              {favObj[id].contract_time}
            </h1>
            <h1>
              Location:
              <MapPin className="inline text-zinc-800 mx-2" size={18} />
              {""}
              {favObj[id].location}
            </h1>
          </div>
          <div className="flex flex-row-reverse mt-5">
            <Link to={favObj[id].redirect_url}>
              <button className="bg-blue-700 text-white text-xl font-semibold rounded-full px-3 cursor-pointer">
                visit <ArrowRight className="inline" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Applicants;
