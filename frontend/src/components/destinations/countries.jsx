import { CountryCard } from "./country.card";
import { destinations } from "../../data/destinations";

export function Countries({ region = "all" }) {
  const list =
    region === "all"
      ? destinations
      : destinations.filter((d) => d.region === region);

  if (list.length === 0) {
    return (
      <p className="text-center text-neutral-500 dark:text-neutral-400 py-10">
        No destinations in this region yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {list.map((destination) => (
        <CountryCard key={destination.slug} destination={destination} />
      ))}
    </div>
  );
}
