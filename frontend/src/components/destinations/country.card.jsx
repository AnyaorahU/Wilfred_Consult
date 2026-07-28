import { Bitcoin, Building2, CircleCheck, Sparkles, Star } from "lucide-react";

export function CountryCard() {
  return (
    <div className="border border-neutral-200 rounded-2xl hover:shadow">
      {/* image part  */}
      <div className="relative h-70">
        <img
          src="/statue-of-liberty.jpg"
          alt=""
          className="object-cover h-full w-full object-fit rounded-tl-2xl rounded-tr-2xl"
        />

        <div className="absolute top-0 left-0 bg-black/40 w-full h-full rounded-tl-2xl rounded-tr-2xl">
          <div className="absolute right-2 top-2 p-1 flex bg-white font-semibold gap-2 items-center px-3 rounded-full">
            <Sparkles size={16} color="#e9a227" />
            Most Popular
          </div>
          <div className="absolute bottom-3 w-full flex flex-col items-center left-1/2 -translate-1/2 text-white">
            <p className="text-3xl font-semibold">United States</p>
            <div className="flex gap-2 text-xs">
              <Star size={18} color="#e9a227" />
              <Star size={18} color="#e9a227" />
              <Star size={18} color="#e9a227" />
              <Star size={18} color="#e9a227" />
              <Star size={18} color="#e9a227" />
              #1 Study Destination
            </div>
          </div>
        </div>
      </div>

      {/* content side  */}
      <div className="p-4 space-y-4">
        {/* top  */}
        <div className="flex justify-between gap-2">
          {/* left  */}
          <div>
            <div className="flex gap-2">
              <Building2 color="#e9a227" />
              <p>Partner Universities</p>
            </div>

            <p className="text-2xl font-semibold">50+</p>
          </div>
          {/* right  */}
          <div>
            <div className="flex gap-2">
              <Bitcoin color="#e9a227" />
              <p>Annual Tuition</p>
            </div>
            <p className="font-semibold text-sm">$25,000 - $55,000/year</p>
          </div>
        </div>

        <hr className="border border-neutral-300" />

        {/* content  */}
        <div>
          <h3>Why Chose United state</h3>

          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <CircleCheck size={18} />
              <p>Home to 8 of top 10 world universities</p>
            </li>
            <li className="flex gap-2 items-center">
              <CircleCheck size={18} />
              <p>Post-study work visa up to 3 years (STEM)</p>
            </li>
            <li className="flex gap-2 items-center">
              <CircleCheck size={18} />
              <p>Diverse cultural environment</p>
            </li>
            <li className="flex gap-2 items-center">
              <CircleCheck size={18} />
              <p>Strong employment opportunities</p>
            </li>
          </ul>
        </div>

        <button className="border w-full p-2 cursor-pointer rounded-2xl">
          View Full Details
        </button>
      </div>
    </div>
  );
}
