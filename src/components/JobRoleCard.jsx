import { Link } from "react-router";
import { MoveRight } from "lucide-react";

function JobRoleCard({ title, img, alt, imgWidth, borderColor, hoverBgColor }) {
  return (
    <div
      className={`group rounded-3xl shadow-zinc-400 shadow-sm h-fit min-h-[200px] hover:border-2 p-3 md:p-10 pb-0 pr-0 m-0 ${borderColor}`}
    >
      <h3 className="hidden md:block text-xl text-gray-400 font-light mb-2">
        Find:{" "}
      </h3>
      <h1 className="text-lg md:text-2xl font-semibold mb-10 md:mb-25">
        Companies for {title}
      </h1>
      <div className="w-full flex ">
        <Link to={`companies/${title}`}>
          <span
            className={`p-1 rounded-2xl text-sm md:text-xl font-semibold group-hover:text-white hover:cursor-pointer h-fit ${hoverBgColor}`}
          >
            View <MoveRight className="inline" />
          </span>
        </Link>
        <img src={img} alt={alt} className={`${imgWidth}`} />
      </div>
    </div>
  );
}

export default JobRoleCard;
