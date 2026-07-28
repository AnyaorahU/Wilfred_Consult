import {
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  FileCheck,
  GraduationCap,
  Headset,
  House,
  Plane,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: <GraduationCap color="#F15A22" />,
    heading: "Study Abroad Consulting",
    subHeading: "Expert guidance for your international education journey",
    price: "299",
    detail:
      "Comprehensive support for selecting the right university, course, and country based on your career aspirations, budget, and academic profile.",
    completeFeatures: [
      "Personalized university shortlisting from 50+ partner institutions",
      "Course selection aligned with career goals",
      "Scholarship identification and application support",
      "Statement of Purpose (SOP) and essay review",
      "Academic credential evaluation",
      "Pre-departure orientation sessions",
    ],
    ourPurpose: [
      "Initial consultation and profile assessment",
      "University and course recommendations",
      "Application preparation and submission",
      "Offer letter negotiation",
      "Enrollment confirmation",
    ],
  },
  {
    id: 2,
    icon: <Plane color="#F15A22" />,
    heading: "Educational Tours",
    subHeading: "Immersive learning experiences worldwide",
    price: "2,500",
    detail:
      "Curated educational tours combining cultural immersion, university visits, and professional development opportunities across 25+ countries.",
    completeFeatures: [
      "Campus tours at top-ranked universities",
      "Industry visits and networking sessions",
      "Cultural exchange programs",
      "Professional skill development workshops",
      "Accommodation and travel logistics",
      "24/7 tour guide support",
    ],
    ourPurpose: [
      "Tour package selection",
      "Itinerary customization",
      "Travel documentation assistance",
      "Pre-tour briefing",
      "On-tour support and follow-up",
    ],
  },
  {
    id: 3,
    icon: <FileCheck color="#F15A22" />,
    heading: "Application Assistance",
    subHeading: "Streamlined application process for guaranteed success",
    price: "199",
    detail:
      "End-to-end application management with our proven 100% success rate, handling everything from documentation to submission.",
    completeFeatures: [
      "Complete application form management",
      "Document verification and authentication",
      "Application tracking system access",
      "Deadline management and reminders",
      "Multiple university applications",
      "Post-submission follow-up",
    ],
    ourPurpose: [
      "Document collection and verification",
      "Application form completion",
      "Quality assurance review",
      "Submission and tracking",
      "Status updates and communication",
    ],
  },
  {
    id: 4,
    icon: <UserCheck color="#F15A22" />,
    heading: "Visa Support Services",
    subHeading: "Expert visa guidance with 100% approval track record",
    price: "399",
    detail:
      "Comprehensive visa application support with documentation preparation, interview coaching, and submission assistance.",
    completeFeatures: [
      "Visa requirement analysis",
      "Document preparation and review",
      "Visa interview preparation and mock sessions",
      "Application form completion",
      "Embassy appointment scheduling",
      "Post-visa approval guidance",
    ],
    ourPurpose: [
      "Visa eligibility assessment",
      "Document compilation",
      "Application submission",
      "Interview preparation",
      "Visa tracking and collection",
    ],
  },
  {
    id: 5,
    icon: <House color="#F15A22" />,
    heading: "Accommodation Services",
    subHeading: "Safe and comfortable housing solutions",
    price: "199",
    detail:
      "Verified accommodation options including university housing, homestays, and shared apartments with complete move-in support.",
    completeFeatures: [
      "Pre-verified accommodation options",
      "Virtual property tours",
      "Lease agreement review",
      "Utility setup assistance",
      "Roommate matching services",
      "Emergency housing support",
    ],
    ourPurpose: [
      "Accommodation preference analysis",
      "Property shortlisting",
      "Virtual/physical tours",
      "Booking and payment facilitation",
      "Move-in coordination",
    ],
  },
  {
    id: 6,
    icon: <Headset color="#F15A22" />,
    heading: "24/7 Student Support",
    subHeading: "Round-the-clock assistance wherever you are",
    price: "199",
    detail:
      "Dedicated support team available 24/7 for emergency assistance, academic guidance, and ongoing support throughout your journey.",
    completeFeatures: [
      "24/7 emergency helpline",
      "Academic progress monitoring",
      "Mental health and wellness support",
      "Career counseling sessions",
      "Parent communication updates",
      "Alumni network access",
    ],
    ourPurpose: [
      "Support plan customization",
      "Regular check-in schedules",
      "Issue resolution tracking",
      "Performance monitoring",
      "Continuous improvement feedback",
    ],
  },
];

function OurServices() {
  const [isExpanded, setIsExpanded] = useState(null);

  const toggleItem = (id) => {
    setIsExpanded(isExpanded === id ? null : id);
  };

  return (
    <div className="lg:space-y-20">
      <div className="text-center space-y-2 w-full max-w-175 mx-auto">
        <h3 className="text-3xl font-semibold">
          Our <span className="text-[#F15A22]">Complete Service Suite</span>
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Every service is designed with your success in mind, backed by years
          of expertise and proven results
        </p>
      </div>
      <div className="space-y-8">
        {services.map((d) => (
          <div
            key={d.id}
            className="lift border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 space-y-4 bg-white dark:bg-neutral-900 hover:shadow-lg hover:border-[#F15A22]/40"
          >
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="h-10 w-10 bg-[#F15A22]/5 rounded-md flex justify-center items-center">
                  {d.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{d.heading}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{d.subHeading}</p>
                </div>
              </div>
              <div className="font-semibold">${d.price}</div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">{d.detail}</p>
            <div className="flex flex-col space-y-2 text-neutral-500 dark:text-neutral-400">
              {d.completeFeatures.slice(0, 4).map((fea, index) => (
                <ul key={index} className="flex gap-2 items-center">
                  <BadgeCheck size={18} color="#F15A22" />
                  <li>{fea}</li>
                </ul>
              ))}
            </div>

            <button
              onClick={() => toggleItem(d.id)}
              className="text-[#F15A22] flex gap-2 items-center"
            >
              {isExpanded === d.id ? "Show Less" : "Show More"}
              {isExpanded === d.id ? (
                <ChevronUp color="#F15A22" size={18} />
              ) : (
                <ChevronDown color="#F15A22" size={18} />
              )}
            </button>

            {isExpanded === d.id && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold">Complete Features</p>

                  <div className="text-neutral-500 dark:text-neutral-400 grid grid-cols-1 sm:grid-cols-2 space-y-2">
                    {d.completeFeatures.map((fea, index) => (
                      <ul key={index} className="flex gap-2 items-center">
                        <BadgeCheck size={18} color="#F15A22" />
                        <li>{fea}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                  <p className="font-semibold">Our Process</p>

                  <div className="text-neutral-900 dark:text-neutral-100">
                    {d.ourPurpose.map((pur, index) => (
                      <ul key={index} className="flex gap-2 space-y-2">
                        <div className="h-6 w-6 flex justify-center items-center text-xs bg-[#F15A22] rounded-full text-white font-semibold">
                          {index + 1}
                        </div>
                        <li>{pur}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                <button className="bg-[#F15A22] w-full p-2 text-center rounded-lg">
                  Get Started with {d.heading}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
