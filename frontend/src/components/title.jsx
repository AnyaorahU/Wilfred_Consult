import Eyebrow from "./eyebrow";

function Title({ text1, text2, subtext, eyebrow, eyebrowIcon }) {
  return (
    <div>
      <div className="text-center flex flex-col items-center space-y-2 w-full max-w-175 mx-auto px-4">
        {eyebrow && <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>}
        <h3 className="text-3xl font-bold text-balance">
          {text1} <span className="text-[#F15A22]"> {text2}</span>
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">{subtext}</p>
      </div>
    </div>
  );
}

export default Title;
