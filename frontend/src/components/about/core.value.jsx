import Title from "../title";
import { CoreCard } from "./core.card";

export function CoreValue() {
  return (
    <div className="w-300 mx-auto p-20 space-y-20">
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
