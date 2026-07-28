import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLink = [
  { id: 1, name: "Our Service", path: "/services" },
  { id: 2, name: "Destinations", path: "/destinations" },
  { id: 3, name: "About Us", path: "/about-us" },
  { id: 4, name: "Testimonials", path: "/testimonials" },
  { id: 5, name: "Contact", path: "/contacts" },
];

const service = [
  { id: 1, name: "Study Abroad", path: "/" },
  { id: 1, name: "Educational Tours", path: "/" },
  { id: 1, name: "Visa Assistance", path: "/" },
  { id: 1, name: "Career Counseling", path: "/" },
  { id: 1, name: "Accommodation Help", path: "/" },
];

function Footer() {
  return (
    <div className="border-t border-t-neutral-300">
      <div className="w-300 mx-auto grid grid-cols-4 gap-8 my-10">
        <div className="space-y-4">
          <h5 className="text-2xl font-semibold">Wilfred Consult</h5>
          <p className="text-neutral-500">
            Your trusted partner for international education and travel
            experiences. Making dreams come true since 2010.
          </p>
          <div className="text-[#e9a227] text-lg flex gap-4">
            <div className="bg-neutral-900 h-8 w-8 flex justify-center items-center rounded-full">
              <FaFacebookF />
            </div>
            <div className="bg-neutral-900 h-8 w-8 flex justify-center items-center rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-neutral-900 h-8 w-8 flex justify-center items-center rounded-full">
              <FaTwitter />
            </div>
            <div className="bg-neutral-900 h-8 w-8 flex justify-center items-center rounded-full">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        {/* quick link  */}
        <div className="space-y-4">
          <p className="font-semibold">Quick Links</p>
          <div className="gap-2 flex flex-col text-neutral-500">
            {quickLink.map((q) => (
              <Link key={q.id} to={q.path}>
                {q.name}
              </Link>
            ))}
          </div>
        </div>
        {/* services  */}
        <div className="space-y-4">
          <p className="font-semibold">Services</p>
          <div className="gap-2 flex flex-col text-neutral-500">
            {service.map((q) => (
              <Link key={q.id} to={q.path}>
                {q.name}
              </Link>
            ))}
          </div>
        </div>
        {/* stay updates */}
        <div className="space-y-4">
          <h5>Stay Updated</h5>
          <p className="text-neutral-500">
            Subscribe to our newsletter for the latest updates and
            opportunities.
          </p>

          <div className="flex items-center gap-2 border border-neutral-200 px-3 bg-[#e9a227]/5 rounded-md">
            <Mail size={18} color="#e9a227" />
            <input type="email" name="" placeholder="Your email" />
          </div>
        </div>
      </div>

      <div className="w-300 mx-auto flex justify-between border-t border-t-neutral-300 text-neutral-500 py-8">
        <div>© 2026 EduVoyage. All rights reserved.</div>
        <div>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
