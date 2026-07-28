import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../lib/config";

const PREFILL = encodeURIComponent(
  "Hi Wilfred Consult! I'd like to learn more about studying / traveling abroad.",
);

export function WhatsAppButton() {
  return (
    <a
      href={`${siteConfig.whatsappHref}?text=${PREFILL}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:block bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-sm font-semibold px-3 py-2 rounded-full shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Chat with us
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping"></span>
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl group-hover:scale-105 transition-transform">
          <FaWhatsapp size={30} />
        </span>
      </span>
    </a>
  );
}

export default WhatsAppButton;
