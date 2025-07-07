/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Search,
  BriefcaseBusiness,
  Building2,
  Check,
  Star,
  MapPinHouse,
} from "lucide-react";
import { JobCard, JobRoleCard } from "../components/index.js";
import boy from "../assets/boy.png";
import sales from "../assets/sales.avif";
import programmer from "../assets/programmer.png";
import dataAnalyst from "../assets/dataAnalyst.png";
import cook from "../assets/cook.avif";
import animator from "../assets/animator.png";
import { useSelector, useDispatch } from "react-redux";
import { favouratesCache } from "../functionality/favouratesSlice.js";

function Jobs() {
  const skillReference = useRef(null);
  const salaryReference = useRef(null);

  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [canRender, setCanRender] = useState(false);

  const [locationsData, setLocationsData] = useState({});
  const [canSuggestionsRender, setCanSuggestionsRender] = useState(false);

  const dispatch = useDispatch();
  const reduxFavourates = useSelector((state) => state.favourates);
  const [favObj, setFavObj] = useState(() => {
    const saved = localStorage.getItem("favourates");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("favourates", JSON.stringify(favObj));
  }, [favObj]);

  function fetchLocationData() {
    if (location) {
      fetch(`https://zunadyn-abf.kxcdn.com/in/geosuggest?where_c=${location}`)
        .then((res) => res.json())
        .then((res) => {
          setLocationsData(res);
          console.log("Request made" + location);
        })
        .catch(() => {
          console.log("Fetching failed :(");
        });
    }
  }
  useEffect(() => {
    const timer = setTimeout(fetchLocationData, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  function handleClick(e) {
    e.preventDefault();
    setSkill(skillReference.current.value);
    setMinSalary(salaryReference.current.value);
    setCanRender(true);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
    if (e.target.value.length > 1) setCanSuggestionsRender(true);
    else setCanSuggestionsRender(false);
  }

  return (
    <div className="w-full px-4">
      <div className="flex flex-col w-full h-auto  rounded-t-2xl bg-gradient-to-t from-blue-300 to-blue-50">
        <div className="MainSection flex w-full h-[40vh] md:h-[70vh]">
          <div className="Slogan w-1/2 flex flex-col justify-center p-3 md:p-10 lg:p-20">
            <h3 className="w-auto text-2xl  ml-0 md:ml-2 -mb-1 md:-mb-3 hidden lg:block">
              Get ready to, Grab your
            </h3>
            <h3 className="w-auto text-2xl  ml-0 md:ml-2 -mb-2 md:-mb-3 lg:-mb-5 block lg:hidden">
              Grab your
            </h3>
            <h1 className="inline w-auto text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tighter whitespace-nowrap">
              Dream
              <span className="inline text-4xl mx-5 md:text-6xl lg:text-8xl font-semibold text-blue-600 tracking-tighter whitespace-nowrap">
                Job
              </span>
            </h1>
            <div className=" w-auto lg:w-1/2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1.5 }}
                className="bg-blue-600 h-2 rounded-full ml-1 md:ml-2 mt-2"
              />
            </div>
            <p className="hidden md:block text-stone-500 font-bold w-3/5 ml-3 mt-3 text-xl">
              First Step towards a Great Career- Apply, Impress, Succeed!
            </p>
            <a
              href="#SearchTitle"
              className=" text-lg md:text-2xl text-white font-semibold bg-sky-700 text-center rounded-full sm:w-[250px] px-5 p-2 mt-5"
            >
              Search Jobs
            </a>
          </div>
          <div className="Image w-1/2 flex justify-center items-center flex-row-reverse">
            <img
              src={boy}
              alt="boy"
              className="w-auto h-[180px] md:h-[425px] lg:h-[500px]"
            />
          </div>
        </div>
        <div className="w-full p-10 flex flex-wrap justify-center gap-10">
          <div className="bg-white w-[225px] shadow-md shadow-zinc-800 rounded-xl text-center flex flex-col items-center p-6">
            <BriefcaseBusiness
              size={50}
              color="#ffffff"
              className="bg-blue-700 rounded-md p-2 mb-5"
            />
            <h1 className="font-bold text-2xl">Explore</h1>
            <h1 className="font-bold text-2xl text-blue-700">500,000+ Jobs</h1>
          </div>
          <div className="bg-white w-[225px] shadow-md shadow-zinc-800 rounded-xl text-center flex flex-col items-center p-6">
            <Building2
              size={50}
              color="#ffffff"
              className="bg-blue-700 rounded-md p-2 mb-5"
            />
            <h1 className="font-bold text-2xl">
              Top Companies <br /> Hiring
            </h1>
          </div>
          <div className="bg-white w-[225px] shadow-md shadow-zinc-800 rounded-xl text-center flex flex-col items-center p-6">
            <Check
              size={50}
              color="#ffffff"
              strokeWidth={3}
              className="bg-blue-700 rounded-md p-2 mb-5"
            />
            <h1 className="font-bold text-2xl">
              Easy Applying <br />
              Process
            </h1>
          </div>
          <div className="bg-white w-[225px] shadow-md shadow-zinc-800 rounded-xl text-center flex flex-col items-center p-6">
            <Star
              size={50}
              color="#ffffff"
              strokeWidth={3}
              className="bg-blue-700 rounded-md p-2 mb-5"
            />
            <h1 className="font-bold text-2xl">
              Save Your
              <br />
              <span className="text-blue-700 mr-1">favourate</span>
              Jobs
            </h1>
          </div>
          <div className="bg-white w-[225px] shadow-md shadow-zinc-800 rounded-xl text-center flex flex-col items-center p-6">
            <MapPinHouse
              size={50}
              color="#ffffff"
              strokeWidth={3}
              className="bg-blue-700 rounded-md p-2 mb-5"
            />
            <h1 className="font-bold text-2xl">
              Find Jobs <br />
              across India
            </h1>
          </div>
        </div>
        <div
          id="SearchTitle"
          className="flex justify-center capitalize font-semibold text-zinc-900 text-2xl -mb-5 mt-2"
        >
          Find your Future Job
        </div>
        <div className="w-full h-auto p-10">
          <div className="flex justify-center items-center w-full p-5">
            <form
              id="JobSearch"
              className=" grid grid-cols-1 gap-1 lg:grid-cols-3 items-center shadow-zinc-700 shadow-md bg-white rounded-xl lg:rounded-full p-5 w-auto font-semibold"
            >
              <div className="block lg:flex mb-3 lg:mb-0">
                <div className="block mb-2 lg:px-5">
                  <Search size={28} color={"#b1a5a5"} />
                </div>
                <input
                  ref={skillReference}
                  type="text"
                  placeholder="Enter Skills"
                  className="focus:outline-none"
                  onFocus={() => {
                    setCanSuggestionsRender(false);
                  }}
                />
                <span className="text-gray-500 hidden md:inline">|</span>
              </div>
              <div className="mb-3 lg:mb-0">
                <input
                  type="text"
                  value={location}
                  placeholder="Enter Location"
                  className="focus:outline-none"
                  onChange={handleLocationChange}
                />
                <span className="text-gray-500 hidden md:inline">|</span>
              </div>
              <div>
                <input
                  ref={salaryReference}
                  type="text"
                  placeholder="min. Salary"
                  className="focus:outline-none mb-3 lg:mb-0"
                />
                <button
                  className="bg-blue-600 rounded-full w-ful text-white p-1 px-6 font-semibold cursor-pointer"
                  onClick={handleClick}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {canSuggestionsRender && locationsData ? (
            <div className=" w-full flex justify-center">
              <div className="min-w-[115px] w-2/10 bg-white shadow-md shadow-zinc-600 rounded-lg mr-35 p-3 ml-30">
                <ul>
                  {locationsData.locations?.map((loc) => (
                    <li key={loc.id}>
                      <button
                        className="p-2 w-full font-semibold cursor-pointer hover:bg-gray-200"
                        onClick={(e) => {
                          setLocation(loc.value);
                          setCanSuggestionsRender(false);
                        }}
                      >
                        {loc.value}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {canRender ? (
        <JobCard
          skill={skill}
          location={location}
          minSalary={minSalary}
          favObj={reduxFavourates}
        />
      ) : (
        <div className="w-full h-auto p-10 flex flex-col justify-center items-center bg-gradient-to-b from-blue-300 to-blue-100 rounded-b-2xl">
          <img
            src="https://img.freepik.com/free-vector/search-concept-illustration_114360-156.jpg"
            alt="Search :)"
            className="w-2/5 rounded-xl"
          />
        </div>
      )}
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-rows-2 w-full h-auto mt-10">
        <div className="text-2xl md:text-4xl font-semibold h-4/5 flex items-center justify-center">
          Popular Companies for Your Job
        </div>
        <JobRoleCard
          img="https://static.vecteezy.com/system/resources/previews/014/194/231/non_2x/businessman-manager-boss-man-an-office-worker-illustration-flat-design-vector.jpg"
          imgWidth="w-3/5"
          alt="manager"
          title="Manager"
          borderColor="border-orange-600"
          hoverBgColor="group-hover:bg-orange-600"
        />
        <JobRoleCard
          img={sales}
          imgWidth="w-7/10"
          alt="sales"
          title="Sales"
          borderColor="border-blue-600"
          hoverBgColor="group-hover:bg-blue-600"
        />
        <JobRoleCard
          img="https://static.vecteezy.com/system/resources/previews/041/928/071/non_2x/programming-software-concept-with-character-situation-man-working-with-java-program-language-code-generates-new-idea-and-fixing-bugs-illustration-with-people-scene-in-flat-design-for-web-vector.jpg"
          imgWidth="w-3/5"
          alt="Java Developer"
          title="Java Developer"
          borderColor="border-green-600"
          hoverBgColor="group-hover:bg-green-600"
        />
        <JobRoleCard
          img="https://img.freepik.com/premium-vector/vector-illustration-doctor_549515-486.jpg"
          imgWidth="w-3/5"
          alt="Doctor"
          title="Doctor"
          borderColor="border-yellow-600"
          hoverBgColor="group-hover:bg-yellow-600"
        />
        <JobRoleCard
          img={animator}
          imgWidth="w-3/5"
          alt="animator"
          title="Animators"
          borderColor="border-violet-600"
          hoverBgColor="group-hover:bg-violet-600"
        />
      </div>
    </div>
  );
}
export default Jobs;
