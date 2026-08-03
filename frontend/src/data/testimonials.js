// Shared testimonials — used by the Testimonials page (all) and the home
// section (first 3), so both stay in sync.

export const testimonials = [
  {
    name: "Sarah Johnson",
    program: "MBA Graduate",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    note: "Wilfred Consult made my dream of studying in London a reality. Their team guided me through every step, from university selection to visa approval. I couldn't have done it without them!",
  },
  {
    name: "Michael Chen",
    program: "Engineering Student",
    country: "Canada",
    flag: "🇨🇦",
    rating: 5,
    note: "The educational tour to Canada was incredible. Not only did I get to visit potential universities, but I also experienced the culture and made lifelong friends. Highly recommended!",
  },
  {
    name: "Priya Patel",
    program: "Medical Student",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
    note: "Their 24/7 support was a game-changer. Even when I had issues settling in Australia, they were just a call away. Professional, caring, and truly invested in student success.",
  },
  {
    name: "David Okafor",
    program: "Computer Science",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    note: "From my SOP to the F-1 visa interview prep, every detail was handled with care. I got into my top-choice university with a scholarship I didn't know I qualified for.",
  },
  {
    name: "Amara Nwosu",
    program: "Data Science",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    note: "I never thought studying in Germany with little to no tuition was possible. Wilfred Consult broke down the blocked-account process and made the whole move stress-free.",
  },
  {
    name: "Liam O'Sullivan",
    program: "Pharmacy",
    country: "Ireland",
    flag: "🇮🇪",
    rating: 5,
    note: "Fast, transparent and genuinely supportive. They matched me with the right program in Dublin and kept me updated at every stage. Ten out of ten.",
  },
  {
    name: "Wei Lim",
    program: "Finance",
    country: "Singapore",
    flag: "🇸🇬",
    rating: 5,
    note: "The counselors really understood my career goals and shortlisted universities that fit perfectly. The Student's Pass process felt effortless with their guidance.",
  },
  {
    name: "Grace Mwangi",
    program: "Environmental Science",
    country: "New Zealand",
    flag: "🇳🇿",
    rating: 5,
    note: "Beyond the application, they helped with accommodation and pre-departure prep. Arriving in New Zealand felt like coming to a place that was already expecting me.",
  },
  {
    name: "Daniel Kim",
    program: "Business Analytics",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    note: "Professional from day one. Clear timelines, honest advice, and no hidden fees. My OPT plans were mapped out before I even landed. Truly a partner for the whole journey.",
  },
];

export const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
