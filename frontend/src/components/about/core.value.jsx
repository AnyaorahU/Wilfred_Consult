import Title from "../title";
import { CoreCard } from "./core.card";

export function CoreValue() {
  return (
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20 space-y-10 lg:space-y-20">
      <Title
        text1={"Our"}
        text2={"Core Values"}
        subtext={"The fundamental principles that drive everything we do"}
      />

      <div>
        <CoreCard />
      </div>
    </div>
  );
}
