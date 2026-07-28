import { TrendingUp } from "lucide-react";

export function StrategicCard() {
  return (
    <div className="lift p-8 space-y-4 border border-neutral-300 dark:border-neutral-700 rounded-2xl flex flex-col items-start hover:border-[#F15A22] hover:shadow-lg">
      <div className="p-2 bg-[#F15A22]/20 rounded-2xl">
        <TrendingUp size={40} />
      </div>
      <h5 className="text-3xl font-bold">Enhanced Success Probability</h5>
      <p className="text-neutral-500 dark:text-neutral-400">
        Strategic diversification across multiple destinations increases
        admission chances at premier institutions by up to 300%.
      </p>
    </div>
  );
}
