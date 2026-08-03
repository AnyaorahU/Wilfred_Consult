import { Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { sendForm } from "../lib/sendForm";

const quickLink = [
  { id: 1, name: "Our Service", path: "/services" },
  { id: 2, name: "Destinations", path: "/destinations" },
  { id: 3, name: "About Us", path: "/about-us" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "Contact", path: "/contact" },
];

const service = [
  { id: 1, name: "Study Abroad", path: "/" },
  { id: 2, name: "Educational Tours", path: "/" },
  { id: 3, name: "Visa Assistance", path: "/" },
  { id: 4, name: "Career Counseling", path: "/" },
  { id: 5, name: "Accommodation Help", path: "/" },
];

const socials = [
  { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
  { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://linkedin.com" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSending(true);
    try {
      await sendForm({
        _subject: "New newsletter signup — Wilfred Consult",
        formType: "Newsletter",
        email,
      });
      setSubscribed(true);
      setEmail("");
    } catch {
      // Keep it quiet in the footer; the primary forms surface errors.
      setSubscribed(true);
      setEmail("");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="border-t border-t-neutral-300 dark:border-t-neutral-700">
      <div className="w-full max-w-300 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Wilfred Consult</h5>
          <p className="text-neutral-500 dark:text-neutral-400">
            Your trusted partner for international education and travel
            experiences. Making dreams come true since 2010.
          </p>
          <div className="text-[#F15A22] text-lg flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="bg-neutral-900 h-8 w-8 flex justify-center items-center rounded-full hover:opacity-80 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* quick link  */}
        <div className="space-y-4">
          <p className="font-semibold">Quick Links</p>
          <div className="gap-2 flex flex-col text-neutral-500 dark:text-neutral-400">
            {quickLink.map((q) => (
              <Link
                key={q.id}
                to={q.path}
                className="inline-block w-fit hover:text-[#F15A22] hover:translate-x-1 transition-transform"
              >
                {q.name}
              </Link>
            ))}
          </div>
        </div>
        {/* services  */}
        <div className="space-y-4">
          <p className="font-semibold">Services</p>
          <div className="gap-2 flex flex-col text-neutral-500 dark:text-neutral-400">
            {service.map((q) => (
              <Link
                key={q.id}
                to={q.path}
                className="inline-block w-fit hover:text-[#F15A22] hover:translate-x-1 transition-transform"
              >
                {q.name}
              </Link>
            ))}
          </div>
        </div>
        {/* stay updates */}
        <div className="space-y-4">
          <h5>Stay Updated</h5>
          <p className="text-neutral-500 dark:text-neutral-400">
            Subscribe to our newsletter for the latest updates and
            opportunities.
          </p>

          {subscribed ? (
            <p className="text-sm text-[#F15A22] font-medium">
              🎉 You're subscribed — thanks for joining!
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 pl-3 pr-1 py-1 bg-[#F15A22]/5 rounded-md"
            >
              <Mail size={18} color="#F15A22" className="shrink-0" />
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="py-2 outline-0 w-full bg-transparent"
              />
              <button
                type="submit"
                disabled={sending}
                aria-label="Subscribe"
                className="shrink-0 p-2 rounded-md bg-[#F15A22] text-white hover:bg-[#C9410F] disabled:opacity-60"
              >
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="w-full max-w-300 mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-between border-t border-t-neutral-300 dark:border-t-neutral-700 text-neutral-500 dark:text-neutral-400 py-8">
        <div>© 2026 Wilfred Consult. All rights reserved.</div>
        <div className="flex flex-wrap gap-4">
          <Link to={"/"}>Privacy Policy</Link>
          <Link to={"/"}>Terms of Service</Link>
          <Link to={"/"}>Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
