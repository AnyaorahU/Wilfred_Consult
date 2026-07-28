import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/services" },
  { id: 1, name: "Destinations", path: "/destinations" },
  { id: 1, name: "About Us", path: "/about-us" },
  // { id: 1, name: "Testimonials", path: "/testimonials" },
  { id: 1, name: "Contact", path: "/contact" },
];

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-neutral-900 text-white shadow-lg">
      <div className="w-300 mx-auto text-lg flex justify-between items-center h-16">
        {/* logo  */}
        <Link to={"/"} className="text-2xl">
          Wilfred Consult
        </Link>

        <nav className="space-x-4">
          {navData.map((nav) => (
            <Link key={nav.id} to={nav.path} className="hover:text-[#e9a227]">
              {nav.name}
            </Link>
          ))}
        </nav>

        <button className="bg-[#F5B23C] hover:bg-[#e9a227] text-black font-semibold p-2 px-4 rounded-md">
          <Link to={"/"}>Apply Now</Link>
        </button>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>

      {show && <div>hola</div>}
    </div>
  );
}

export default Navbar;
