function Title({ text1, text2, subtext }) {
  return (
    <div>
      <div className="text-center space-y-2 w-full max-w-175 mx-auto px-4">
        <h3 className="text-3xl font-bold">
          {text1} <span className="text-[#F15A22]"> {text2}</span>
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">{subtext}</p>
      </div>
    </div>
  );
}

export default Title;
