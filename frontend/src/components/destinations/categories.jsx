import { Building2, Globe, MapPin, Plane } from "lucide-react";

const categories = [
  { icon: <Globe />, name: "All Destinations", number: "10" },
  { icon: <MapPin />, name: "North Ameriaca", number: "8" },
  { icon: <Building2 />, name: "Europe", number: "3" },
  { icon: <Plane />, name: "Aisa Pacific", number: "3" },
];

function Categories() {
  return (
    <div className="mx-auto w-full flex gap-8 justify-center py-10 bg-neutral-50">
      {categories.map((item, index) => (
        <button className="flex gap-4 items-center p-2 px-4  bg-white rounded-lg border border-neutral-200 hover:shadow-lg">
          {item.icon}
          <p className="text-xl font-semibold">{item.name}</p>
          <p>{item.number}</p>
        </button>
      ))}
    </div>
  );
}

export default Categories;
