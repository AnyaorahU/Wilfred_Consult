import { Mail, MessageCircleMore, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "../../lib/config";

const methods = [
  {
    icon: <Phone size={30} />,
    heading: "Call Us",
    sub: "Speak directly with a counselor",
    detail: siteConfig.phone,
    subDetail: "Mon–Fri, 9am–6pm EST",
    href: siteConfig.phoneHref,
  },
  {
    icon: <Mail size={30} />,
    heading: "Email Us",
    sub: "We respond within 2 hr",
    detail: siteConfig.email,
    subDetail: "Available 24/7",
    href: siteConfig.emailHref,
  },
  {
    icon: <MessageCircleMore size={30} />,
    heading: "WhatsApp",
    sub: "Instant support, right now",
    detail: "Start a Conversation",
    subDetail: "Average response 2 min",
    href: siteConfig.whatsappHref,
  },
];

export function ContactHead() {
  return (
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20 space-y-10">
      <div className="w-full space-y-4">
        <div className="p-1 bg-[#F15A22]/5 flex gap-2 text-[#F15A22]">
          <MessageSquare size={16} />
          <p>Free Consultation — No Obligation</p>
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold lg:leading-20">
          Let's Plan Your
          <br />
          <span className="text-[#F15A22]">Future Together</span>
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Our expert counselors are ready to guide you. Whether you have a
          question, need a quote, or want to book your free consultation — we're
          here.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 max-w-200 gap-8">
        {methods.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="lift border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 grid gap-1 justify-items-center text-center p-4 rounded-2xl hover:border-[#F15A22]"
          >
            <div className="bg-[#F15A22]/10 w-16 h-16 grid place-items-center rounded-2xl">
              {item.icon}
            </div>
            <div>
              <h5 className="text-lg font-semibold text-black dark:text-white">
                {item.heading}
              </h5>
              <p className="text-xs">{item.sub}</p>
            </div>
            <div>
              <p className="text-lg text-[#F15A22]">{item.detail}</p>
              <p className="text-xs">{item.subDetail}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
