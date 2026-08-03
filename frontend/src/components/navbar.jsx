import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./theme.toggle";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "Destinations", path: "/destinations" },
  { id: 4, name: "About Us", path: "/about-us" },
  { id: 5, name: "Testimonials", path: "/testimonials" },
  { id: 6, name: "Contact", path: "/contact" },
];

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-neutral-900 text-white shadow-lg sticky top-0 z-50">
      <div className="w-full max-w-300 mx-auto px-4 text-lg flex justify-between items-center h-16">
        {/* logo  */}
        <Link to={"/"} className="text-2xl">
          Wilfred Consult
        </Link>

        {/* desktop nav  */}
        <nav className="hidden lg:flex space-x-4">
          {navData.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.path}
              end={nav.path === "/"}
              className={({ isActive }) =>
                `relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#F15A22] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#F15A22] after:w-full"
                    : "hover:text-[#F15A22] after:w-0 hover:after:w-full"
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </nav>

        {/* right cluster: theme toggle + CTA + mobile menu button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button className="hidden lg:block bg-[#F15A22] hover:bg-[#C9410F] text-white font-semibold p-2 px-4 rounded-md hover:-translate-y-0.5">
            <Link to={"/contact"}>Apply Now</Link>
          </button>

          {/* mobile toggle  */}
          <button
            className="lg:hidden"
            onClick={() => setShow((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={show}
          >
            {show ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* mobile menu  */}
      {show && (
        <nav className="lg:hidden origin-top animate-fade-in border-t border-neutral-800 px-4 py-4 flex flex-col gap-4">
          {navData.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.path}
              end={nav.path === "/"}
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F15A22] font-semibold"
                  : "hover:text-[#F15A22]"
              }
            >
              {nav.name}
            </NavLink>
          ))}
          <button className="bg-[#F15A22] hover:bg-[#C9410F] text-white font-semibold p-2 px-4 rounded-md">
            <Link to={"/contact"} onClick={() => setShow(false)}>
              Apply Now
            </Link>
          </button>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
