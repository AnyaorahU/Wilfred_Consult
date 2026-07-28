function Title({ text1, text2, subtext }) {
  return (
    <div>
      <div className="text-center space-y-2 w-175 mx-auto">
        <h3 className="text-3xl font-bold">
          {text1} <span className="text-[#e9a227]"> {text2}</span>
        </h3>
        <p className="text-neutral-500">{subtext}</p>
      </div>
    </div>
  );
}

export default Title;
