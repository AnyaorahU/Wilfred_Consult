import {
  Clock,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Navigation,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../../lib/config";

const office = {
  country: "US",
  city: "New York",
  label: "Americas HQ",
  heading: "New York Office",
  address: "350 Fifth Avenue, Suite 7400, New York, NY 10118",
  details: [
    {
      icon: <MapPin size={18} color="#F15A22" />,
      title: "Address",
      lines: ["350 Fifth Avenue, Suite 7400", "New York, NY 10118"],
    },
    {
      icon: <Phone size={18} color="#F15A22" />,
      title: "Phone",
      lines: [siteConfig.phone],
    },
    {
      icon: <Mail size={18} color="#F15A22" />,
      title: "Email",
      lines: [siteConfig.email],
    },
    {
      icon: <Clock size={18} color="#F15A22" />,
      title: "Office Hours",
      lines: ["Mon–Fri 9am–6pm EST"],
    },
  ],
};

export function GlobalOffices() {
  const [mapActive, setMapActive] = useState(false);

  // `q=<address>` drops a pin on the exact location; z sets the zoom.
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    office.address,
  )}&z=15&output=embed`;
  const externalMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.address,
  )}`;

  return (
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F15A22]/10 text-[#F15A22] text-sm font-semibold">
          <MapPin size={14} /> Visit Us
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
          Our <span className="text-[#F15A22]">Global Offices</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Walk in, call, or email — we're here in every major hub
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-xl">
        {/* ---------- Map panel ---------- */}
        <div className="relative min-h-[24rem] lg:min-h-full overflow-hidden">
          <iframe
            title={`${office.city} office map`}
            src={embedSrc}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Address overlay — click to reveal the interactive map */}
          <button
            type="button"
            onClick={() => setMapActive(true)}
            aria-label="Reveal interactive map"
            className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/80 dark:bg-black/60 backdrop-blur-[1px] transition-opacity duration-500 ${
              mapActive ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="w-16 h-16 grid place-items-center bg-[#F15A22] rounded-full shadow-lg animate-float">
              <MapPin color="white" />
            </div>
            <p className="text-2xl font-bold dark:text-white">{office.country}</p>
            <p className="text-xl font-semibold dark:text-white">{office.city}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-200">{office.label}</p>
            <span className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F15A22] text-white text-xs font-semibold shadow-md">
              <Navigation size={14} /> Click to explore the map
            </span>
          </button>

          {/* Restore the details card once the map is active */}
          {mapActive && (
            <button
              type="button"
              onClick={() => setMapActive(false)}
              className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 shadow-md text-sm font-semibold hover:bg-white dark:bg-neutral-900"
            >
              <X size={14} /> Show details
            </button>
          )}

          {/* Always-available deep link to the full map */}
          <a
            href={externalMap}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 shadow-md text-sm font-semibold hover:bg-white dark:bg-neutral-900 hover:text-[#F15A22]"
          >
            Open in Google Maps <ExternalLink size={14} />
          </a>
        </div>

        {/* ---------- Info panel ---------- */}
        <div className="p-8 lg:p-10 space-y-6 bg-white dark:bg-neutral-900">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F15A22]/10 text-[#F15A22] text-sm font-semibold">
            <Globe size={16} />
            {office.label}
          </div>
          <h3 className="text-2xl font-bold">{office.heading}</h3>

          <div className="space-y-3">
            {office.details.map((detail, index) => (
              <div
                key={index}
                className="flex gap-4 p-3 rounded-2xl hover:bg-[#F15A22]/5 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 grid place-items-center bg-[#F15A22]/10 rounded-xl">
                  {detail.icon}
                </div>
                <div>
                  <p className="font-semibold">{detail.title}</p>
                  {detail.lines.map((line, i) => (
                    <p key={i} className="text-neutral-500 dark:text-neutral-400">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={siteConfig.phoneHref}
              className="w-full p-3 text-center bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#C9410F] hover:-translate-y-0.5"
            >
              Call Now
            </a>
            <a
              href={siteConfig.emailHref}
              className="w-full p-3 text-center border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-semibold rounded-2xl hover:border-[#F15A22] hover:-translate-y-0.5"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
