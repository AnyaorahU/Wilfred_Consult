import { Award, CheckCircle2, Shield } from "lucide-react";
import Title from "../title";

function Guarantee() {
  return (
    <div className="py-20">
      <div className="flex flex-col gap-4 items-center p-6 lg:p-10 bg-[#F15A22]/10 rounded-lg w-full max-w-300 mx-auto">
        <Shield size={70} />
        <Title
          text1={"Our"}
          text2={"Commitment to You"}
          subtext={
            "We stand behind our services with a satisfaction guarantee. If you're not completely satisfied with our service quality, we'll work with you until you are. Your success is our success."
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: <Award color="#F15A22" />, text: "15+ Years Experience" },
            {
              icon: <Shield color="#F15A22" />,
              text: "100% Transparent Pricing",
            },
            {
              icon: <CheckCircle2 color="#F15A22" />,
              text: "Satisfaction Guaranteed",
            },
          ].map((item, index) => (
            <div key={index} className="p-2 flex gap-2 bg-white dark:bg-neutral-900">
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
