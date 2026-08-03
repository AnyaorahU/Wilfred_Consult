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
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20">
      <div className="w-full space-y-4 ">
        <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-[#F15A22]/10 text-[#F15A22] text-sm font-semibold">
          {icon}
          {icontext}
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold lg:leading-20">
          {title1}
          <br />
          <span className="text-[#F15A22]">{title2}</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">{text}</p>

        <div className="flex flex-wrap gap-4">
          <Link
            to={path}
            className="group flex gap-2 items-center p-2 px-4 bg-[#F15A22] hover:bg-[#C9410F] hover:-translate-y-0.5 text-white rounded-md"
          >
            {button1}
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to={"/"}
            className="p-2 px-4 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-[#F15A22] rounded-md"
          >
            {button2}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeadComponent;
