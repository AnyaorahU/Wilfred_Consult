import {
  CircleCheck,
  GraduationCap,
  Mail,
  MessageSquare,
  Phone,
  Plane,
  Send,
  Star,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sendForm } from "../../lib/sendForm";

const steps = [
  {
    icon: <MessageSquare size={18} />,
    heading: "Step 01",
    content: "We review your inquiry and match you with the right counselor",
  },
  {
    icon: <Phone size={18} />,
    heading: "Step 02",
    content: "Your counselor contacts you within 2 hours to schedule a call",
  },
  {
    icon: <GraduationCap size={18} />,
    heading: "Step 03",
    content: "Free 30-min consultation your goals, your timeline, your options",
  },
  {
    icon: <Plane size={18} />,
    heading: "Step 04",
    content:
      "We craft a personalized roadmap for your international education journey",
  },
];

const socials = [
  { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
  { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://linkedin.com" },
];

const guarantees = [
  { content: "Free initial consultation, no commitment" },
  { content: "Response within 2 hours on weekdays" },
  { content: "Dedicated counselor throughout your journey" },
  { content: "100% confidential your data stays private" },
];

const services = [
  "Study Abroad Programs",
  "University Application Assistance",
  "Visa Support and Guidance",
  "Educational Tours",
  "Accommodation Assistance",
  "Scholarship Guidance",
  "Career Counseling",
  "General Inquiry",
];

const destinations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "Ireland",
  "New Zealand",
  "Others",
];

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  destination: "",
  message: "",
  agree: false,
};

export function BookSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.firstname.trim()) next.firstname = "First name is required";
    if (!form.lastname.trim()) next.lastname = "Last name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.agree) next.agree = "Please accept the Privacy Policy to continue";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSendError("");
    try {
      await sendForm({
        _subject: "New consultation request — Wilfred Consult",
        formType: "Contact / Consultation",
        ...form,
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      setSendError(err.message || "Couldn't send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      id="book-consultation"
      className="w-full max-w-300 mx-auto flex flex-col lg:flex-row items-start px-4 py-10 lg:py-20 gap-8 scroll-mt-20"
    >
      <div className="w-full lg:w-2/5 space-y-6 p-6 shadow-lg rounded-2xl">
        <div>
          <h3 className="text-2xl font-semibold">
            Book a Free <span className="text-[#F15A22]">Consultation</span>
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Fill out the form and one of our expert counselors will reach out
            within 2 hours during business hours.
          </p>
        </div>
        <div className="space-y-4 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl shadow-lg">
          <h5 className="font-bold text-neutral-500 dark:text-neutral-400 text-lg">
            What Happens Next
          </h5>
          <div className="space-y-2">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 grid place-items-center bg-[#F15A22]/10 rounded-2xl">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#F15A22]">{item.heading}</p>
                  <p className="text-neutral-500 dark:text-neutral-400">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-4 bg-[#F15A22]/10 border border-[#F15A22]/40 rounded-2xl">
          <div className="flex items-center gap-2">
            <Star color="#F15A22" />
            <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              Trusted by 10,000+ students
            </p>
          </div>
          <ul className="space-y-2">
            {guarantees.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <CircleCheck size={18} color="#F15A22" className="shrink-0" />
                <p className="text-neutral-500 dark:text-neutral-400">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-semibold">Follow Our Journey</p>

          <div className="text-[#F15A22] text-lg flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="bg-neutral-200 dark:bg-neutral-700 h-8 w-8 flex justify-center items-center rounded-full hover:bg-[#F15A22]/20 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 p-6 space-y-6 h-auto rounded-2xl shadow-xl">
        <div>
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="text-neutral-500 dark:text-neutral-400">All fields marked are required</p>
        </div>

        {submitted && (
          <div className="flex gap-3 items-center p-4 bg-[#F15A22]/10 border border-[#F15A22]/40 rounded-2xl">
            <CircleCheck color="#F15A22" className="shrink-0" />
            <p className="text-neutral-700 dark:text-neutral-300">
              Thanks! Your request has been received — a counselor will reach out
              within 2 hours during business hours.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-semibold">
            <div className="grid gap-2">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={form.firstname}
                onChange={handleChange}
                placeholder="John"
                className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-4 focus:outline-[#F15A22]/40"
              />
              {errors.firstname && (
                <p className="text-sm font-normal text-red-500">
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={form.lastname}
                onChange={handleChange}
                placeholder="Doe"
                className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-2xl px-4 focus:outline-[#F15A22]/40"
              />
              {errors.lastname && (
                <p className="text-sm font-normal text-red-500">
                  {errors.lastname}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email Address</label>
              <div className="flex gap-4 items-center p-2 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <Mail size={22} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="outline-0 w-full"
                />
              </div>
              {errors.email && (
                <p className="text-sm font-normal text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone">Phone Number</label>
              <div className="flex gap-4 items-center p-2 border border-neutral-200 dark:border-neutral-800 rounded-2xl">
                <Phone size={22} />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (212) 555-0100"
                  className="outline-0 w-full"
                />
              </div>
              {errors.phone && (
                <p className="text-sm font-normal text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-4 font-semibold">
            <div className="grid gap-2">
              <label htmlFor="service">Service Interested In</label>
              <div className="border flex justify-between border-neutral-200 dark:border-neutral-800 rounded-2xl text-lg">
                <select
                  name="service"
                  id="service"
                  value={form.service}
                  onChange={handleChange}
                  className="p-2 w-full focus:outline-0"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <div className="w-2"></div>
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="destination">Preferred Destination</label>
              <div className="border flex justify-between border-neutral-200 dark:border-neutral-800 rounded-2xl text-lg">
                <select
                  name="destination"
                  id="destination"
                  value={form.destination}
                  onChange={handleChange}
                  className="p-2 w-full focus:outline-0"
                >
                  <option value="">Select a destination</option>
                  {destinations.map((destination) => (
                    <option key={destination} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>
                <div className="w-2"></div>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your goals, timeline, academic background, or any questions you have..."
              className="w-full h-30 resize-none focus:outline-[#F15A22]/40 rounded-2xl p-3 placeholder:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
            ></textarea>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-sm text-neutral-500 dark:text-neutral-400">
                I agree to Wilfred Consult's{" "}
                <Link to={"/"} className="text-[#F15A22] hover:underline">
                  Privacy Policy
                </Link>{" "}
                and consent to being contacted regarding my inquiry. *
              </label>
            </div>
            {errors.agree && (
              <p className="text-sm text-red-500">{errors.agree}</p>
            )}
          </div>

          {sendError && (
            <p className="text-sm text-red-500 text-center">{sendError}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="flex items-center gap-4 text-lg justify-center w-full p-3 bg-[#F15A22] text-white rounded-2xl hover:bg-[#C9410F] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Send Message and Book Consultation"}
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
