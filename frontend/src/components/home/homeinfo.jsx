import { Phone } from "lucide-react";

function HeroInfo() {
  return (
    <div className="lg:p-10 mb-20 grid grid-cols-2 bg-[#e9a227] rounded-2xl  gap-8 text-white items-center">
      <div className="p-2 space-y-4">
        <h3 className="text-2xl font-semibold">Ready to Start Your Journey?</h3>
        <p className="text-neutral-200">
          Get in touch with our expert consultants today and take the first step
          towards your dream education abroad.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-2 ">
            <div className="h-10 w-10 rounded-full bg-white/20 flex justify-center items-center">
              <Phone size={18} />
            </div>
            <div className="text-sm">
              <p className="text-xs text-neutral-300">Call us</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="h-10 w-10 rounded-full bg-white/20 flex justify-center items-center">
              <Phone size={18} />
            </div>
            <div className="text-sm">
              <p className="text-xs text-neutral-300">Call us</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      {/* form  */}
      <div className="bg-white rounded-2xl text-black p-4 py-10 space-y-4 ">
        <h4 className="text-2xl font-semibold">Request a Free Consultation</h4>
        <p className="text-neutral-500">
          Fill in your details and we'll get back to you within 24 hours.
        </p>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder=""
            name=""
            value={""}
            className="border border-neutral-200 bg-neutral-50 rounded-lg p-2"
          />
          <input
            type="email"
            placeholder=""
            name=""
            value={""}
            className="border border-neutral-200 bg-neutral-50 rounded-lg p-2"
          />
          <input
            type="Number"
            placeholder=""
            name=""
            value={""}
            className="border border-neutral-200 bg-neutral-50 rounded-lg p-2"
          />
          <input
            type="text"
            placeholder=""
            name=""
            value={""}
            className="border border-neutral-200 bg-neutral-50 rounded-lg p-2"
          />
          <button
            type="submit"
            className="bg-[#e9a227] text-white p-1 rounded-md"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroInfo;
