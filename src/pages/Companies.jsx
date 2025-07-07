import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Search } from "lucide-react";
import { CompanyCard } from "../components/index.js";

function Companies() {
  const inputRef = useRef();
  const buttonRef = useRef();
  let params = useParams();
  const [jobRole, setJobRole] = useState("");
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (buttonRef) {
      buttonRef.current.click();
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setJobRole(inputRef.current.value);
    setCanRender(true);
  }
  return (
    <div className="w-full flex flex-col items-center justify-center mt-5">
      <form className="flex justify-between rounded-2xl shadow-zinc-800 shadow-md px-5 w-auto md:rounded-full font-semibold ">
        <div className="flex items-center">
          <Search size-={18} color="#bababa" className="inline" />
          <input
            type="text"
            defaultValue={params.jobRole}
            ref={inputRef}
            placeholder="Enter Job role"
            className="roundedl-full border-blue-600 focus:outline-none inline py-4 px-5  md:w-150"
          />
        </div>
        <button
          className="bg-blue-600 text-white text-center rounded-full w-auto inline p-2 md:px-4 my-2 hover:cursor-pointer"
          onClick={handleClick}
          ref={buttonRef}
        >
          search
        </button>
      </form>
      {canRender ? (
        <CompanyCard job={jobRole.toLowerCase()} />
      ) : (
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/422/113/non_2x/accountant-and-his-finances-concept-art-free-vector.jpg"
            alt="Search..."
          />
        </div>
      )}
    </div>
  );
}

export default Companies;
