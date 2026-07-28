import { Award, Backpack, Eye, Globe, Star, Target, Users } from "lucide-react";
import HeadComponent from "../components/headComponent";
import { MissionVision } from "../components/about/mission.vision";
import Title from "../components/title";
import { OurJourney } from "../components/about/journey";
import { CoreValue } from "../components/about/core.value";
import { WhyUs } from "../components/about/why.chose.us";
import { AboutCTA } from "../components/about/cta.section";

function About() {
  return (
    <div>
      <div className="py-20 w-300 mx-auto">
        <HeadComponent
          icontext={"Transforming Lives Since 2008"}
          title1={"Empowering Dreams Through"}
          title2={"Educational Excellence"}
          text={
            "A legacy of excellence spanning 15+ years, with 10,000+ successful placements and partnerships with 250+ world-renowned universities across 25+ countries."
          }
          path={""}
          button1={"Join Our Success Story"}
          button2={"Return Home"}
          icon={<Award size={16} />}
        />

        <div className="grid grid-cols-4 gap-8">
          {[
            {
              text: "STUDENT PLACED",
              value: "10,00+",
              icon: <Users size={30} color="#e9a227" />,
            },
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
              text: "SUCCESS RATE",
              value: "98.7%",
              icon: <Star size={30} color="#e9a227" />,
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
        <div className="py-20 w-300 mx-auto grid grid-cols-2 gap-8">
          <MissionVision
            icon={<Target />}
            heading={"Our Mission"}
            context={
              "To democratize access to world-class international education by providing comprehensive, personalized guidance that empowers students to achieve their academic and career aspirations. We believe every deserving student should have the opportunity to study at the world's best universities, regardless of their background."
            }
          />
          <MissionVision
            icon={<Eye />}
            heading={"Our Vision"}
            context={
              "To be the world's most trusted and innovative education consultancy, recognized for our unwavering commitment to student success. We envision a future where borders don't limit educational opportunities, and where every student can pursue their dreams on a global stage with confidence and expert support."
            }
          />
        </div>
      </div>
      <div>
        <Title
          text1={"Our"}
          text2={" Journey of Excellence"}
          subtext={
            "A legacy built on trust, innovation, and unwavering commitment to student success"
          }
        />
        <OurJourney />
      </div>

      <div>
        <CoreValue />
      </div>
      <div>
        <WhyUs />
      </div>

      <div>
        <AboutCTA />
      </div>
    </div>
  );
}

export default About;
