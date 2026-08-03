import { BadgeCheck } from "lucide-react";
import Title from "../title";

const packages = [
  {
    name: "Essential",
    price: "$599",
    description: "Perfect for self-motivated students who need basic guidance",
    features: [
      "University shortlisting (up to 5)",
      "Application assistance (2 universities)",
      "SOP review",
      "Email support",
      "Resource library access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$1,299",
    description: "Most popular choice for comprehensive support",
    features: [
      "Everything in Essential",
      "Application assistance (5 universities)",
      "Visa support services",
      "Interview preparation",
      "Priority support",
      "Scholarship assistance",
      "Accommodation guidance",
    ],
    cta: "Start Premium",
    popular: true,
  },
  {
    name: "Elite",
    price: "$2,499",
    description: "VIP treatment with white-glove service",
    features: [
      "Everything in Premium",
      "Unlimited applications",
      "Dedicated counselor",
      "24/7 phone support",
      "Educational tour discount",
      "Post-arrival support (6 months)",
      "Career placement assistance",
      "Parent portal access",
    ],
    cta: "Go Elite",
    popular: false,
  },
];

function Packages() {
  return (
    <div className="lg:space-y-20 py-10">
      <Title
        eyebrow={"Pricing & Plans"}
        text1={" Choose Your"}
        text2={"Perfect Package"}
        subtext={
          "Transparent, all-inclusive pricing with no hidden fees — choose the level of support that fits your goals and budget."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pac, index) => (
          <div
            key={index}
            className={`${index === 1 ? "border-[#F15A22] lg:scale-110" : "border-neutral-200 dark:border-neutral-800"} relative p-4 py-10 border hover:shadow-lg rounded-lg space-y-4 bg-white dark:bg-neutral-900`}
          >
            {index === 1 ? (
              <div className="absolute -top-3 bg-[#F15A22] text-white px-3 p-1 rounded-full left-1/2 -translate-x-1/2 text-sm">
                Most Popular
              </div>
            ) : (
              ""
            )}
            <div className="text-center">
              <h4 className="text-lg font-bold">{pac.name}</h4>
              <p className="text-2xl font-bold">{pac.price}</p>
              <p className="text-neutral-500 dark:text-neutral-400">{pac.description}</p>
            </div>
            <div className="text-neutral-500 dark:text-neutral-400">
              {pac.features.map((fea, index) => (
                <p key={index} className="flex gap-2 items-center">
                  <BadgeCheck color="#F15A22" size={18} />
                  {fea}
                </p>
              ))}
            </div>
            <button className="p-2 w-full text-white bg-[#F15A22] rounded-lg">
              {pac.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
