import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  Building2,
  CalendarDays,
  CircleCheck,
  Clock,
  FileText,
  GraduationCap,
  Headset,
  Languages,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wallet,
} from "lucide-react";
import { getDestination } from "../data/destinations";

const companyServices = [
  {
    icon: <GraduationCap color="#F15A22" />,
    title: "University & Course Selection",
    text: "We shortlist the best-fit universities and programs for your profile, budget, and career goals.",
  },
  {
    icon: <FileText color="#F15A22" />,
    title: "Application & SOP Support",
    text: "End-to-end application handling, statement of purpose review, and document preparation.",
  },
  {
    icon: <ShieldCheck color="#F15A22" />,
    title: "Visa & Immigration Guidance",
    text: "Step-by-step visa filing support, financial documentation, and mock interview coaching.",
  },
  {
    icon: <Wallet color="#F15A22" />,
    title: "Scholarship & Funding",
    text: "We identify scholarships and education loans to make your study abroad affordable.",
  },
  {
    icon: <MapPin color="#F15A22" />,
    title: "Accommodation Help",
    text: "Verified housing options and move-in support before you arrive.",
  },
  {
    icon: <Headset color="#F15A22" />,
    title: "Pre-Departure & 24/7 Support",
    text: "Orientation, travel prep, and round-the-clock assistance throughout your journey.",
  },
];

function StatTile({ icon, label, value }) {
  return (
    <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 space-y-2">
      <div className="w-10 h-10 grid place-items-center bg-[#F15A22]/10 rounded-xl">
        {icon}
      </div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
    </div>
  );
}

function SectionHeading({ text1, text2, subtext }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl lg:text-3xl font-bold">
        {text1} <span className="text-[#F15A22]">{text2}</span>
      </h2>
      {subtext && <p className="text-neutral-500 dark:text-neutral-400">{subtext}</p>}
    </div>
  );
}

function DestinationDetail() {
  const { slug } = useParams();
  const destination = getDestination(slug);

  if (!destination) {
    return (
      <div className="w-full max-w-300 mx-auto px-4 py-32 text-center space-y-6">
        <h1 className="text-3xl font-bold">Destination not found</h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          We couldn't find the destination you're looking for.
        </p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 py-3 px-6 bg-[#F15A22] text-white font-semibold rounded-2xl"
        >
          <ArrowLeft size={18} /> Back to Destinations
        </Link>
      </div>
    );
  }

  const {
    name,
    flag,
    image,
    rank,
    summary,
    stats,
    highlights,
    visa,
    immigrationSteps,
    studyCriteria,
    costs,
    scholarships,
    popularCourses,
    topUniversities,
  } = destination;

  return (
    <div>
      {/* Hero */}
      <div className="relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#F15A22]/40 to-[#F15A22]/10" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative w-full max-w-300 mx-auto px-4 py-16 lg:py-24 text-white space-y-4">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-sm hover:text-[#F15A22]"
          >
            <ArrowLeft size={16} /> Back to Destinations
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F15A22] text-white text-sm font-semibold">
            <Sparkles size={16} /> {rank}
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold">
            {flag} Study in {name}
          </h1>
          <p className="text-lg text-neutral-200 max-w-3xl">{summary}</p>
        </div>
      </div>

      <div className="w-full max-w-300 mx-auto px-4 py-12 lg:py-16 space-y-16">
        {/* Quick stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 -mt-24 lg:-mt-28 relative">
          <StatTile
            icon={<Building2 color="#F15A22" />}
            label="Partner Universities"
            value={stats.partnerUniversities}
          />
          <StatTile
            icon={<Banknote color="#F15A22" />}
            label="Annual Tuition"
            value={stats.tuition}
          />
          <StatTile
            icon={<Plane color="#F15A22" />}
            label="Post-Study Work"
            value={stats.workVisa}
          />
          <StatTile
            icon={<CalendarDays color="#F15A22" />}
            label="Main Intakes"
            value={stats.intake}
          />
        </div>

        {/* Why choose */}
        <section className="space-y-6">
          <SectionHeading text1="Why Choose" text2={name} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((point, index) => (
              <div
                key={index}
                className="flex gap-3 items-start p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900"
              >
                <CircleCheck color="#F15A22" className="shrink-0 mt-1" />
                <p className="text-neutral-600 dark:text-neutral-300">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Immigration / visa process */}
        <section className="space-y-6">
          <SectionHeading
            text1="Visa &"
            text2="Immigration Process"
            subtext={visa.summary}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <FileText color="#F15A22" />, label: "Visa Type", value: visa.name },
              { icon: <Clock color="#F15A22" />, label: "Processing Time", value: visa.processingTime },
              { icon: <BadgeCheck color="#F15A22" />, label: "Work Rights", value: visa.workRights },
              { icon: <GraduationCap color="#F15A22" />, label: "Post-Study Stay", value: visa.postStudy },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-[#F15A22]/5 border border-[#F15A22]/20 space-y-2"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  {item.icon} {item.label}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 flex gap-3 items-start">
            <Wallet color="#F15A22" className="shrink-0 mt-1" />
            <p className="text-neutral-600 dark:text-neutral-300">
              <span className="font-semibold text-black dark:text-white">
                Financial requirement:{" "}
              </span>
              {visa.financialProof}
            </p>
          </div>

          {/* Steps timeline */}
          <div className="space-y-4">
            {immigrationSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 shrink-0 grid place-items-center bg-[#F15A22] text-white font-bold rounded-full">
                    {index + 1}
                  </div>
                  {index < immigrationSteps.length - 1 && (
                    <div className="w-[2px] flex-1 bg-[#F15A22]/30 my-1" />
                  )}
                </div>
                <div className="pb-4">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-neutral-500 dark:text-neutral-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study criteria */}
        <section className="space-y-6">
          <SectionHeading
            text1="Admission Criteria for"
            text2="International Students"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Academic */}
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-semibold text-lg">
                <BookOpen color="#F15A22" /> Academic Requirements
              </div>
              <ul className="space-y-2">
                {studyCriteria.academic.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <CircleCheck size={18} color="#F15A22" className="shrink-0 mt-1" />
                    <p className="text-neutral-600 dark:text-neutral-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* English */}
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-semibold text-lg">
                <Languages color="#F15A22" /> English Proficiency
              </div>
              <div className="space-y-2">
                {studyCriteria.english.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-neutral-100 pb-2"
                  >
                    <p className="font-medium">{item.test}</p>
                    <p className="text-neutral-600 dark:text-neutral-300">{item.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-semibold text-lg">
                <FileText color="#F15A22" /> Required Documents
              </div>
              <ul className="space-y-2">
                {studyCriteria.documents.map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <CircleCheck size={18} color="#F15A22" className="shrink-0 mt-1" />
                    <p className="text-neutral-600 dark:text-neutral-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intakes */}
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-semibold text-lg">
                <CalendarDays color="#F15A22" /> Intake Seasons
              </div>
              <div className="space-y-2">
                {studyCriteria.intakes.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-neutral-100 pb-2"
                  >
                    <p className="font-medium">{item.name}</p>
                    <p className="text-neutral-600 dark:text-neutral-300">{item.months}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Costs */}
        <section className="space-y-6">
          <SectionHeading text1="Cost of" text2="Studying" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {costs.map((cost, index) => (
              <div
                key={index}
                className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-1"
              >
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{cost.label}</p>
                <p className="text-lg font-bold text-[#F15A22]">{cost.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarships */}
        <section className="space-y-6">
          <SectionHeading text1="Scholarships &" text2="Funding" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scholarships.map((sch, index) => (
              <div
                key={index}
                className="lift p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-2 hover:border-[#F15A22]/40"
              >
                <Trophy color="#F15A22" />
                <h4 className="font-semibold">{sch.name}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{sch.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Courses + universities */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <BookOpen color="#F15A22" /> Popular Courses
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCourses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-[#F15A22]/10 text-[#F15A22] text-sm font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <Trophy color="#F15A22" /> Top Universities
            </div>
            <ul className="space-y-2">
              {topUniversities.map((uni, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <GraduationCap size={18} color="#F15A22" className="shrink-0 mt-1" />
                  <p className="text-neutral-600 dark:text-neutral-300">{uni}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How Wilfred Consult helps */}
        <section className="space-y-6">
          <SectionHeading
            text1="How Wilfred Consult Helps You"
            text2={`Study in ${name}`}
            subtext="From your first consultation to arrival on campus, we support you at every step of your study abroad journey."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyServices.map((service, index) => (
              <div
                key={index}
                className="lift p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3 hover:border-[#F15A22]/40"
              >
                <div className="w-12 h-12 grid place-items-center bg-[#F15A22]/10 rounded-2xl">
                  {service.icon}
                </div>
                <h4 className="font-semibold">{service.title}</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 lg:p-12 rounded-2xl bg-[#F15A22]/10 border border-[#F15A22]/30 flex flex-col items-center text-center gap-4">
          <h3 className="text-2xl lg:text-3xl font-bold">
            Ready to Start Your Journey to {name}?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl">
            Book a free consultation and our expert counselors will build a
            personalized roadmap for your admission and visa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact#book-consultation"
              className="flex items-center justify-center gap-2 py-3 px-6 bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#C9410F] hover:-translate-y-0.5"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/destinations"
              className="py-3 px-6 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-semibold rounded-2xl hover:border-[#F15A22]"
            >
              Explore Other Destinations
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DestinationDetail;
