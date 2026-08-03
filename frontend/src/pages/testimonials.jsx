import { ArrowRight, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/reveal";
import Eyebrow from "../components/eyebrow";
import { testimonials, initials } from "../data/testimonials";

const stats = [
  { value: "10,000+", label: "Students Placed" },
  { value: "98.7%", label: "Success Rate" },
  { value: "25+", label: "Countries" },
  { value: "4.9/5", label: "Average Rating" },
];

function Testimonials() {
  return (
    <div>
      {/* Hero */}
      <section className="w-full max-w-300 mx-auto px-4 py-16 lg:py-24 flex flex-col items-center text-center space-y-4">
        <Eyebrow icon={<Star size={14} fill="#F15A22" />}>Student Stories</Eyebrow>
        <h1 className="text-4xl lg:text-6xl font-bold text-balance">
          Hear From Our <span className="text-[#F15A22]">Students</span>
        </h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl">
          Real journeys from students we've guided to top universities across the
          globe. Your success story could be next.
        </p>
      </section>

      {/* Stats */}
      <Reveal className="block">
        <div className="w-full max-w-300 mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="lift p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 text-center"
            >
              <p className="text-3xl lg:text-4xl font-bold text-[#F15A22]">
                {s.value}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Testimonial grid */}
      <Reveal className="block">
        <div className="w-full max-w-300 mx-auto px-4 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
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
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="w-full py-20 px-4 bg-[#F15A22]/10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to write your{" "}
              <span className="text-[#F15A22]">success story?</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Join thousands of students who trusted Wilfred Consult to turn their
              study-abroad dreams into reality.
            </p>
            <Link
              to="/contact#book-consultation"
              className="group flex items-center gap-2 py-3 px-6 bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#C9410F] hover:-translate-y-0.5"
            >
              Book Free Consultation{" "}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

export default Testimonials;
