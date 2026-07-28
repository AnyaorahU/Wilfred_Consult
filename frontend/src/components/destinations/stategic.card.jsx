import { TrendingUp } from "lucide-react";

export function StrategicCard() {
  return (
    <div className="p-8 space-y-4 border border-neutral-300 rounded-2xl flex flex-col items-start">
      <div className="p-2 bg-[#e9a227]/20 rounded-2xl">
        <TrendingUp size={40} />
      </div>
      <h5 className="text-3xl font-bold">Enhanced Success Probability</h5>
      <p className="text-neutral-500">
        Strategic diversification across multiple destinations increases
        admission chances at premier institutions by up to 300%.
      </p>
    </div>
  );
}
