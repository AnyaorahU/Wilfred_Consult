import Title from "../title";
import { UsCard } from "./why.us.card";

export function WhyUs() {
  return (
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20 space-y-10 lg:space-y-20">
      <Title text1={"Why Students Choose"} text2={"Wilfred Consult"} />

      <div>
        <UsCard />
      </div>
    </div>
  );
}
