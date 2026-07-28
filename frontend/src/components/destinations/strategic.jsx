import { StrategicCard } from "./stategic.card";

export function Strategic() {
  return (
    <div className="w-300 mx-auto grid grid-cols-3 gap-8 py-10">
      <StrategicCard />
      <StrategicCard />
      <StrategicCard />
    </div>
  );
}
