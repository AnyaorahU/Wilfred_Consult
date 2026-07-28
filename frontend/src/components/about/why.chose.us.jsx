import Title from "../title";
import { UsCard } from "./why.us.card";

export function WhyUs() {
  return (
    <div className="w-300 mx-auto p-20 space-y-20">
      <Title text1={"Why Students Choose"} text2={"EduVoyage"} />

      <div>
        <UsCard />
      </div>
    </div>
  );
}
