import { useEffect, useState } from "react";
import { CircleCheck, GraduationCap, Plane, Send, X } from "lucide-react";
import { sendForm } from "../lib/sendForm";

const destinations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
  "New Zealand",
  "Singapore",
  "Other",
];

const emptyForm = {
  // shared
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  destination: "",
  // study
  qualification: "",
  program: "",
  level: "",
  intake: "",
  englishTest: "",
  budget: "",
  // travel
  travelType: "",
  departure: "",
  returnDate: "",
  travelers: "1",
  visaHelp: "",
  // shared
  message: "",
};

/* Small styled field helpers so the two forms stay consistent + DRY */
function Field({ label, error, children }) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold">
      {label}
      {children}
      {error && <span className="text-xs font-normal text-red-500">{error}</span>}
    </label>
  );
}

const inputClass =
  "p-3 border border-neutral-200 dark:border-neutral-800 rounded-xl font-normal focus:outline-[#F15A22]/40 w-full";

function Input(props) {
  return <input {...props} className={inputClass} />;
}

function Select({ children, ...props }) {
  return (
    <select {...props} className={`${inputClass} bg-white dark:bg-neutral-900`}>
      {children}
    </select>
  );
}

export function ApplyModal({ open, onClose }) {
  const [mode, setMode] = useState("study"); // "study" | "travel"
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  // Lock body scroll + close on Escape while the modal is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.firstName.trim()) next.firstName = "First name is required";
    if (!form.lastName.trim()) next.lastName = "Last name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.destination) next.destination = "Please choose a destination";
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
        _subject: `New ${mode === "study" ? "study" : "travel"} application — Wilfred Consult`,
        formType: mode === "study" ? "Study Application" : "Travel Application",
        ...form,
      });
      setSubmitted(true);
    } catch (err) {
      setSendError(err.message || "Couldn't send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const resetAndClose = () => {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
    setMode("study");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-start sm:items-center justify-center p-4 bg-black/60 animate-fade-in overflow-y-auto"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-2xl my-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <h3 className="text-2xl font-bold">
              Start Your <span className="text-[#F15A22]">Application</span>
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Tell us your plans and a counselor will reach out within 24 hours.
            </p>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close"
            className="shrink-0 p-2 rounded-full hover:bg-neutral-100 dark:bg-neutral-800"
          >
            <X />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 grid place-items-center bg-[#F15A22]/10 rounded-full">
              <CircleCheck size={36} color="#F15A22" />
            </div>
            <h4 className="text-xl font-bold">Application Received!</h4>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
              Thanks, {form.firstName}. Your {mode === "study" ? "study" : "travel"}{" "}
              enquiry has been submitted — our team will contact you shortly.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-2 py-3 px-6 bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#F15A22]/90"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* switch button — toggles which form renders (ternary below) */}
            <div className="grid grid-cols-2 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-2xl">
              <button
                type="button"
                onClick={() => setMode("study")}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold transition-colors ${
                  mode === "study"
                    ? "bg-[#F15A22] text-white shadow"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                <GraduationCap size={18} /> Study Abroad
              </button>
              <button
                type="button"
                onClick={() => setMode("travel")}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold transition-colors ${
                  mode === "travel"
                    ? "bg-[#F15A22] text-white shadow"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                <Plane size={18} /> Travel
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* shared personal details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name *" error={errors.firstName}>
                  <Input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                  />
                </Field>
                <Field label="Last Name *" error={errors.lastName}>
                  <Input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </Field>
                <Field label="Email Address *" error={errors.email}>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </Field>
                <Field label="Phone Number *" error={errors.phone}>
                  <Input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (212) 555-0100"
                  />
                </Field>
                <Field label="Country of Residence">
                  <Input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Your current country"
                  />
                </Field>
                <Field label="Preferred Destination *" error={errors.destination}>
                  <Select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </Select>
                </Field>
              </div>

              {/* ternary: render the fields for the active form */}
              {mode === "study" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Highest Qualification">
                    <Select
                      name="qualification"
                      value={form.qualification}
                      onChange={handleChange}
                    >
                      <option value="">Select qualification</option>
                      <option>High School</option>
                      <option>Diploma</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree</option>
                    </Select>
                  </Field>
                  <Field label="Program / Field of Interest">
                    <Input
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      placeholder="e.g. Computer Science"
                    />
                  </Field>
                  <Field label="Study Level">
                    <Select
                      name="level"
                      value={form.level}
                      onChange={handleChange}
                    >
                      <option value="">Select level</option>
                      <option>Foundation / Diploma</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>PhD / Doctorate</option>
                    </Select>
                  </Field>
                  <Field label="Preferred Intake">
                    <Select
                      name="intake"
                      value={form.intake}
                      onChange={handleChange}
                    >
                      <option value="">Select intake</option>
                      <option>Spring (Jan–Mar)</option>
                      <option>Summer (Apr–Jun)</option>
                      <option>Fall (Aug–Oct)</option>
                    </Select>
                  </Field>
                  <Field label="English Test Taken">
                    <Select
                      name="englishTest"
                      value={form.englishTest}
                      onChange={handleChange}
                    >
                      <option value="">Select one</option>
                      <option>IELTS</option>
                      <option>TOEFL</option>
                      <option>PTE</option>
                      <option>Duolingo</option>
                      <option>Not taken yet</option>
                    </Select>
                  </Field>
                  <Field label="Estimated Budget / Year">
                    <Input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="e.g. $20,000"
                    />
                  </Field>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Purpose of Travel">
                    <Select
                      name="travelType"
                      value={form.travelType}
                      onChange={handleChange}
                    >
                      <option value="">Select purpose</option>
                      <option>Tourism / Holiday</option>
                      <option>Educational Tour</option>
                      <option>Business</option>
                      <option>Family / Visit</option>
                      <option>Medical</option>
                    </Select>
                  </Field>
                  <Field label="Number of Travelers">
                    <Input
                      type="number"
                      min="1"
                      name="travelers"
                      value={form.travelers}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Departure Date">
                    <Input
                      type="date"
                      name="departure"
                      value={form.departure}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Return Date">
                    <Input
                      type="date"
                      name="returnDate"
                      value={form.returnDate}
                      onChange={handleChange}
                    />
                  </Field>
                  <Field label="Need Visa Assistance?">
                    <Select
                      name="visaHelp"
                      value={form.visaHelp}
                      onChange={handleChange}
                    >
                      <option value="">Select one</option>
                      <option>Yes, please help</option>
                      <option>No, already sorted</option>
                    </Select>
                  </Field>
                </div>
              )}

              <Field label="Additional Message">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={
                    mode === "study"
                      ? "Tell us about your academic goals..."
                      : "Tell us about your travel plans..."
                  }
                  className={`${inputClass} h-24 resize-none`}
                />
              </Field>

              {sendError && (
                <p className="text-sm text-red-500 text-center">{sendError}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 w-full p-3 bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#C9410F] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending
                  ? "Sending…"
                  : `Submit ${mode === "study" ? "Study" : "Travel"} Application`}
                <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplyModal;
