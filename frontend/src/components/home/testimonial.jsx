import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "../eyebrow";
import { testimonials, initials } from "../../data/testimonials";

const featured = testimonials.slice(0, 3);

function Testimonial() {
  return (
    <div className="py-10 space-y-8">
      <div className="flex flex-col items-center w-full max-w-150 mx-auto text-center p-4 space-y-2">
        <Eyebrow icon={<Star size={14} fill="#F15A22" />}>Testimonials</Eyebrow>
        <h2 className="text-3xl font-semibold">What Our Students Say</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Hear from students who have successfully embarked on their
          international education journey with us.
        </p>
      </div>

      {/* cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((t, i) => (
          <div
            key={i}
            className="lift flex flex-col gap-4 p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 hover:border-[#F15A22]/40"
          >
            <Quote color="#F15A22" size={30} />
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} size={16} color="#F15A22" fill="#F15A22" />
              ))}
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 flex-1">
              {t.note}
            </p>
            <div className="flex gap-3 items-center pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="h-11 w-11 shrink-0 grid place-items-center rounded-full bg-[#F15A22]/10 text-[#F15A22] font-bold">
                {initials(t.name)}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {t.program} · {t.flag} {t.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/testimonials"
          className="group inline-flex items-center gap-2 py-2.5 px-6 border border-[#F15A22] text-[#F15A22] font-semibold rounded-full hover:bg-[#F15A22] hover:text-white transition-colors"
        >
          Read More Stories
          <Star
            size={16}
            fill="currentColor"
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}

export default Testimonial;
