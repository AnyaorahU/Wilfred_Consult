import { CircleCheck, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { sendForm } from "../../lib/sendForm";
import { siteConfig } from "../../lib/config";

const initialForm = { name: "", email: "", phone: "", destination: "" };

function HeroInfo() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSendError("");
    try {
      await sendForm({
        _subject: "New consultation request — Wilfred Consult",
        formType: "Home consultation request",
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
    <div className="p-4 lg:p-10 mb-20 grid grid-cols-1 lg:grid-cols-2 bg-[#F15A22] rounded-2xl gap-8 text-white items-center">
      <div className="p-2 space-y-4">
        <h3 className="text-2xl font-semibold">Ready to Start Your Journey?</h3>
        <p className="text-neutral-200">
          Get in touch with our expert consultants today and take the first step
          towards your dream education abroad.
        </p>
        <div className="space-y-4">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 hover:opacity-90"
          >
            <div className="h-10 w-10 rounded-full bg-white/20 flex justify-center items-center">
              <Phone size={18} />
            </div>
            <div className="text-sm">
              <p className="text-xs text-neutral-300">Call us</p>
              <p>{siteConfig.phone}</p>
            </div>
          </a>
          <a
            href={siteConfig.emailHref}
            className="flex items-center gap-2 hover:opacity-90"
          >
            <div className="h-10 w-10 rounded-full bg-white/20 flex justify-center items-center">
              <Mail size={18} />
            </div>
            <div className="text-sm">
              <p className="text-xs text-neutral-300">Email us</p>
              <p>{siteConfig.email}</p>
            </div>
          </a>
        </div>
      </div>

      {/* form  */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl text-black dark:text-white p-4 py-10 space-y-4 ">
        <h4 className="text-2xl font-semibold">Request a Free Consultation</h4>
        <p className="text-neutral-500 dark:text-neutral-400">
          Fill in your details and we'll get back to you within 24 hours.
        </p>

        {submitted ? (
          <div className="flex gap-3 items-center p-4 bg-[#F15A22]/10 border border-[#F15A22]/40 rounded-lg">
            <CircleCheck color="#F15A22" className="shrink-0" />
            <p className="text-neutral-700 dark:text-neutral-300">
              Thanks! We've received your request and will get back to you within
              24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid gap-1">
              <label htmlFor="hi-name" className="text-sm font-semibold">
                Full name
              </label>
              <input
                id="hi-name"
                type="text"
                placeholder="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-2 focus:outline-[#F15A22]/40"
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name}</span>
              )}
            </div>
            <div className="grid gap-1">
              <label htmlFor="hi-email" className="text-sm font-semibold">
                Email address
              </label>
              <input
                id="hi-email"
                type="email"
                placeholder="Email address"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-2 focus:outline-[#F15A22]/40"
              />
              {errors.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="grid gap-1">
              <label htmlFor="hi-phone" className="text-sm font-semibold">
                Phone number
              </label>
              <input
                id="hi-phone"
                type="tel"
                placeholder="Phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-2 focus:outline-[#F15A22]/40"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="hi-destination" className="text-sm font-semibold">
                Destination of interest
              </label>
              <input
                id="hi-destination"
                type="text"
                placeholder="Destination of interest"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 rounded-lg p-2 focus:outline-[#F15A22]/40"
              />
            </div>
            {sendError && (
              <span className="text-xs text-red-500">{sendError}</span>
            )}
            <button
              type="submit"
              disabled={sending}
              className="bg-[#F15A22] text-white p-2 rounded-md font-semibold hover:bg-[#C9410F] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending…" : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default HeroInfo;
