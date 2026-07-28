import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function HeadComponent({
  icon,
  icontext,
  title1,
  title2,
  text,
  button1,
  button2,
  path,
}) {
  return (
    <div className="w-300 mx-auto lg:py-20">
      <div className="w-full space-y-4 ">
        <div className="p-1 bg-[#e9a227]/5 flex gap-2 text-[#e9a227]">
          {icon}
          {icontext}
        </div>
        <h1 className="text-6xl font-bold leading-20">
          {title1}
          <br />
          <span className="text-[#e9a227]">{title2}</span>
        </h1>
        <p className="text-neutral-500">{text}</p>

        <div className="flex gap-4">
          <button className="flex gap-2 p-2 bg-[#e9a227] text-white rounded-md">
            <Link to={path}>{button1}</Link>
            <ArrowRight />
          </button>
          <button className="p-2 border border-neutral-300 bg-white rounded-md">
            <Link to={"/"}>{button2}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadComponent;
