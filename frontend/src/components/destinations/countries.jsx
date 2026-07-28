import { Bitcoin, Building2, CircleCheck, Sparkles, Star } from "lucide-react";
import { CountryCard } from "./country.card";

export function Countries() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
}
