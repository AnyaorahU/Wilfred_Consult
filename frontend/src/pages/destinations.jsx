import Categories from "../components/destinations/categories";
import HeadComponent from "../components/headComponent";
import { Award, Backpack, Globe, Users } from "lucide-react";
import Title from "../components/title";
import { Countries } from "../components/destinations/countries";
import { Strategic } from "../components/destinations/strategic";
import { DestinationCTA } from "../components/destinations/cta.section";
import Reveal from "../components/reveal";
import { useState } from "react";

function Destinations() {
  const [region, setRegion] = useState("all");

  return (
    <div>
      <div className="space-y-10 w-full max-w-300 mx-auto px-4 py-10 lg:py-20">
        <HeadComponent
          icon={<Globe size={14} color="#F15A22" />}
          icontext={"Explore 25+ Premium Destinations Worldwide"}
          title1={"Discover Your Ideal"}
          title2={"Study Destination"}
          text={
            "From Ivy League institutions to world-renowned universities across continents. Find your perfect academic home with our expert guidance."
          }
          button1={"Schedule Expert Consultation"}
          button2={"Return Home"}
          path={"/contact#book-consultation"}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              text: "COUNTRIES",
              value: "25+",
              icon: <Globe size={30} color="#F15A22" />,
            },
            {
              text: "PARTNER UNIVERSITIES",
              value: "250+",
              icon: <Backpack size={30} color="#F15A22" />,
            },
            {
              text: "STUDENTS PLACED",
              value: "10,000+",
              icon: <Users size={30} color="#F15A22" />,
            },
            {
              text: "SUCCESS RATE",
              value: "98.7%",
              icon: <Award size={30} color="#F15A22" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="lift p-4 border border-neutral-200 dark:border-neutral-800 space-y-4 rounded-lg bg-white dark:bg-neutral-900 hover:shadow-lg hover:border-[#F15A22]/40"
            >
              <div>{item.icon}</div>
              <p className="text-4xl font-bold">{item.value}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Reveal>
        <Categories active={region} onChange={setRegion} />
      </Reveal>

      <Reveal className="space-y-10 w-full max-w-300 mx-auto px-4 py-10 lg:py-20 block">
        <Title
          text1={"Premium Study"}
          text2={"Destinations"}
          subtext={
            "Comprehensive insights into top study destinations, including visa pathways, scholarship opportunities, and career prospects."
          }
        />

        <Countries region={region} />
      </Reveal>

      <Reveal className="space-y-10 py-20 block">
        <Title
          text1={"Strategic"}
          text2={"Multi-Destination Approach"}
          subtext={"Maximize success and unlock global opportunities"}
        />
        <Strategic />
      </Reveal>
      <Reveal>
        <DestinationCTA />
      </Reveal>
    </div>
  );
}

export default Destinations;
