import { StrategicCard } from "./stategic.card";

export function Strategic() {
  return (
    <div className="w-full max-w-300 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      <StrategicCard />
      <StrategicCard />
      <StrategicCard />
    </div>
  );
}
