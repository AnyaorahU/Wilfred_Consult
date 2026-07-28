import Categories from "../components/destinations/categories";
import HeadComponent from "../components/headComponent";
import { Award, Backpack, Globe, Users } from "lucide-react";
import Title from "../components/title";
import { Countries } from "../components/destinations/countries";
import { Strategic } from "../components/destinations/strategic";
import { DestinationCTA } from "../components/destinations/cta.section";

function Destinations() {
  return (
    <div>
      <div className=" space-y-10 w-300 mx-auto py-20">
        <HeadComponent
          icon={<Globe size={14} color="#e9a227" />}
          icontext={"Explore 25+ Premium Destinations Worldwide"}
          title1={"Discover Your Ideal"}
          title2={"Study Destination"}
          text={
            "From Ivy League institutions to world-renowned universities across continents. Find your perfect academic home with our expert guidance."
          }
          button1={"Schedule Expert Consultation"}
          button2={"Return Home"}
          path={"/"}
        />

        <div className="grid grid-cols-4 gap-8">
          {[
            {
              text: "COUNTRIES",
              value: "25+",
              icon: <Globe size={30} color="#e9a227" />,
            },
            {
              text: "PARTNER UNIVERSITES",
              value: "250+",
              icon: <Backpack size={30} color="#e9a227" />,
            },
            {
              text: "STUDENT PLACED",
              value: "10,00+",
              icon: <Users size={30} color="#e9a227" />,
            },
            {
              text: "SUCCESS RATE",
              value: "98.7%",
              icon: <Award size={30} color="#e9a227" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 border border-neutral-200 space-y-4 rounded-lg bg-white hover:shadow-lg"
            >
              <div>{item.icon}</div>
              <p className="text-4xl font-bold">{item.value}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Categories />
      </div>

      <div className=" space-y-10 w-300 mx-auto py-20">
        <Title
          text1={"Premium Study"}
          text2={"Destinations"}
          subtext={
            "Comprehensive insights into top study destinations, including visa pathways, scholarship opportunities, and career prospects."
          }
        />

        <Countries />
      </div>

      <div className="space-y-10 py-20">
        <Title
          text1={"Strategic"}
          text2={"Multi-Destination Approach"}
          subtext={"Maximize success and unlock global opportunities"}
        />
        <Strategic />
      </div>
      <DestinationCTA />
    </div>
  );
}

export default Destinations;
