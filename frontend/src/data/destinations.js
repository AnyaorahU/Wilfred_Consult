// Shared source of truth for study destinations.
// Used by the Destinations page grid (country cards) and each country's detail page.
// `image` is optional — cards/pages fall back to a branded gradient + flag when it's null.

export const destinations = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    image: "/unitedstates.jpg",
    popular: true,
    badge: "Most Popular",
    rank: "#1 Study Destination",
    rating: 4.8,
    summary:
      "Home to the world's most prestigious universities and unmatched research opportunities, the USA remains the top choice for ambitious international students.",
    stats: {
      partnerUniversities: "50+",
      tuition: "$25,000 – $55,000 / year",
      workVisa: "Up to 3 years (STEM OPT)",
      intake: "Fall, Spring, Summer",
    },
    highlights: [
      "Home to 8 of the top 10 world-ranked universities",
      "Optional Practical Training (OPT) up to 3 years for STEM graduates",
      "Diverse, multicultural campus environment",
      "Strong on-campus employment and research funding",
    ],
    visa: {
      name: "F-1 Student Visa",
      summary:
        "The F-1 visa allows international students to study full-time at an accredited US institution (SEVP-certified).",
      processingTime: "3–5 weeks after interview",
      financialProof: "Proof of funds covering 1 year of tuition + living costs",
      workRights: "20 hrs/week on-campus during term; full-time in breaks",
      postStudy: "12 months OPT (36 months for STEM fields)",
    },
    immigrationSteps: [
      {
        title: "Receive your I-20",
        description:
          "After accepting your university offer and paying the deposit, the school issues Form I-20 confirming your enrollment.",
      },
      {
        title: "Pay the SEVIS I-901 fee",
        description:
          "Pay the mandatory SEVIS fee online and keep the receipt for your visa interview.",
      },
      {
        title: "Complete the DS-160 form",
        description:
          "Fill out the online non-immigrant visa application and upload your photo.",
      },
      {
        title: "Book & attend the visa interview",
        description:
          "Schedule an appointment at the US embassy/consulate and attend with your documents and financial proof.",
      },
      {
        title: "Receive your F-1 visa",
        description:
          "Once approved, collect your passport with the visa stamp and prepare for departure (arrive up to 30 days before start date).",
      },
    ],
    studyCriteria: {
      academic: [
        "High school diploma for undergraduate; bachelor's degree for graduate study",
        "Competitive GPA (typically 3.0+ / 4.0 scale)",
        "SAT/ACT for undergraduate, GRE/GMAT for many graduate programs",
      ],
      english: [
        { test: "IELTS", score: "6.5 – 7.0" },
        { test: "TOEFL iBT", score: "80 – 100" },
        { test: "Duolingo", score: "105 – 120" },
      ],
      documents: [
        "Valid passport",
        "Academic transcripts & certificates",
        "Statement of Purpose (SOP)",
        "Letters of recommendation",
        "Proof of funds / bank statements",
      ],
      intakes: [
        { name: "Fall (primary)", months: "Aug – Sep" },
        { name: "Spring", months: "Jan" },
        { name: "Summer (limited)", months: "May" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "$25,000 – $45,000 / yr" },
      { label: "Tuition (postgrad)", value: "$30,000 – $55,000 / yr" },
      { label: "Living expenses", value: "$12,000 – $20,000 / yr" },
      { label: "Student visa (SEVIS + fee)", value: "~$535" },
    ],
    scholarships: [
      { name: "Fulbright Foreign Student Program", detail: "Fully funded graduate scholarships" },
      { name: "University merit scholarships", detail: "Up to 100% tuition based on academics" },
      { name: "Assistantships (TA/RA)", detail: "Tuition waiver + stipend at graduate level" },
    ],
    popularCourses: [
      "Computer Science & AI",
      "Business & MBA",
      "Engineering",
      "Data Science",
      "Medicine & Health Sciences",
    ],
    topUniversities: [
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Harvard University",
      "University of California, Berkeley",
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    image: "/unitedkingdom.jpg",
    popular: true,
    badge: "Premium Choice",
    rank: "#2 Study Destination",
    rating: 4.9,
    summary:
      "World-renowned universities, shorter degree durations, and the Graduate Route make the UK one of the most efficient paths to a global qualification.",
    stats: {
      partnerUniversities: "45+",
      tuition: "£15,000 – £35,000 / year",
      workVisa: "2 years (Graduate Route)",
      intake: "September, January",
    },
    highlights: [
      "1-year master's degrees save time and money",
      "2-year post-study work via the Graduate Route",
      "Globally respected institutions (Russell Group)",
      "Gateway to Europe with rich cultural heritage",
    ],
    visa: {
      name: "Student Visa (formerly Tier 4)",
      summary:
        "The UK Student visa lets you study with a licensed sponsor once you have a Confirmation of Acceptance for Studies (CAS).",
      processingTime: "About 3 weeks",
      financialProof: "Tuition for 1 year + £1,023–£1,334/month living costs",
      workRights: "20 hrs/week during term time",
      postStudy: "2-year Graduate Route (3 years for PhD)",
    },
    immigrationSteps: [
      {
        title: "Get your CAS",
        description:
          "Your university issues a Confirmation of Acceptance for Studies once you accept the offer and meet conditions.",
      },
      {
        title: "Prepare financial evidence",
        description:
          "Hold the required funds for 28 consecutive days before applying.",
      },
      {
        title: "Complete the online application",
        description:
          "Apply on the UK government website, pay the visa fee and the Immigration Health Surcharge (IHS).",
      },
      {
        title: "Biometrics & documents",
        description:
          "Attend a visa application centre to give fingerprints and submit documents.",
      },
      {
        title: "Collect your BRP",
        description:
          "After approval, collect your Biometric Residence Permit in the UK within 10 days of arrival.",
      },
    ],
    studyCriteria: {
      academic: [
        "Recognised high school qualification for undergraduate",
        "Bachelor's degree (2:1 or 2:2 equivalent) for master's",
        "Some programs require GMAT/GRE or a portfolio",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 7.0" },
        { test: "TOEFL iBT", score: "72 – 100" },
        { test: "PTE Academic", score: "59 – 76" },
      ],
      documents: [
        "Valid passport",
        "Academic transcripts",
        "Personal statement",
        "Reference letters",
        "Proof of funds (28-day rule)",
      ],
      intakes: [
        { name: "September (primary)", months: "Sep" },
        { name: "January", months: "Jan" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "£15,000 – £25,000 / yr" },
      { label: "Tuition (postgrad)", value: "£17,000 – £35,000 / yr" },
      { label: "Living (outside London)", value: "£12,000 / yr" },
      { label: "Living (London)", value: "£16,000 / yr" },
    ],
    scholarships: [
      { name: "Chevening Scholarships", detail: "Fully funded master's by the UK government" },
      { name: "Commonwealth Scholarships", detail: "For students from Commonwealth nations" },
      { name: "University GREAT scholarships", detail: "£10,000 towards tuition" },
    ],
    popularCourses: [
      "Business & Management",
      "Law",
      "Engineering",
      "Finance & Accounting",
      "Creative Arts & Design",
    ],
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London (UCL)",
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    image: "/canada.jpg",
    popular: true,
    badge: "Best Value",
    rank: "#3 Study Destination",
    rating: 4.7,
    summary:
      "Affordable, welcoming and famous for clear routes to permanent residency, Canada blends quality education with an excellent quality of life.",
    stats: {
      partnerUniversities: "40+",
      tuition: "CA$20,000 – CA$40,000 / year",
      workVisa: "Up to 3 years (PGWP)",
      intake: "Sep, Jan, May",
    },
    highlights: [
      "Post-Graduation Work Permit up to 3 years",
      "Clear pathways to permanent residency (Express Entry)",
      "Affordable tuition vs. USA/UK",
      "Safe, multicultural, high quality of life",
    ],
    visa: {
      name: "Study Permit",
      summary:
        "A study permit lets you study at a Designated Learning Institution (DLI); apply after receiving your Letter of Acceptance.",
      processingTime: "Varies; ~ few weeks (faster via SDS)",
      financialProof: "Tuition + CA$20,635/year living (GIC recommended)",
      workRights: "Up to 24 hrs/week off-campus during term",
      postStudy: "PGWP up to 3 years based on program length",
    },
    immigrationSteps: [
      {
        title: "Get your Letter of Acceptance",
        description:
          "Receive an acceptance letter from a Designated Learning Institution (DLI).",
      },
      {
        title: "Arrange finances (GIC)",
        description:
          "Buy a Guaranteed Investment Certificate and pay first-year tuition to qualify for faster processing (SDS).",
      },
      {
        title: "Complete a medical exam",
        description:
          "Undergo a panel-physician medical exam if required for your country.",
      },
      {
        title: "Apply for the study permit",
        description:
          "Submit your application online with biometrics, LOA, proof of funds and statement of purpose.",
      },
      {
        title: "Receive your POE letter",
        description:
          "On approval you get a Port of Entry letter; the study permit is issued when you arrive in Canada.",
      },
    ],
    studyCriteria: {
      academic: [
        "High school completion for undergraduate diplomas/degrees",
        "Bachelor's degree for postgraduate programs",
        "Minimum GPA varies by institution and program",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 6.5" },
        { test: "TOEFL iBT", score: "80 – 90" },
        { test: "PTE Academic", score: "58 – 65" },
      ],
      documents: [
        "Valid passport",
        "Letter of Acceptance from a DLI",
        "Proof of funds / GIC",
        "Statement of Purpose",
        "Academic transcripts",
      ],
      intakes: [
        { name: "Fall (primary)", months: "Sep" },
        { name: "Winter", months: "Jan" },
        { name: "Summer", months: "May" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "CA$20,000 – CA$30,000 / yr" },
      { label: "Tuition (postgrad)", value: "CA$18,000 – CA$40,000 / yr" },
      { label: "Living expenses", value: "CA$15,000 – CA$20,000 / yr" },
      { label: "Study permit fee", value: "CA$150" },
    ],
    scholarships: [
      { name: "Vanier Canada Graduate Scholarships", detail: "CA$50,000/yr for doctoral students" },
      { name: "University entrance awards", detail: "Merit-based tuition reductions" },
      { name: "Provincial scholarships", detail: "Region-specific funding options" },
    ],
    popularCourses: [
      "Computer Science & IT",
      "Business & Supply Chain",
      "Healthcare & Nursing",
      "Engineering",
      "Environmental Science",
    ],
    topUniversities: [
      "University of Toronto",
      "University of British Columbia (UBC)",
      "McGill University",
      "University of Waterloo",
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Asia-Pacific",
    image: null,
    popular: false,
    rank: "#5 Study Destination",
    rating: 4.6,
    summary:
      "Sunny campuses, generous post-study work rights and globally ranked universities make Australia a favourite for international students.",
    stats: {
      partnerUniversities: "35+",
      tuition: "AU$20,000 – AU$45,000 / year",
      workVisa: "2 – 4 years (Temporary Graduate)",
      intake: "Feb, July",
    },
    highlights: [
      "Post-study work visa of 2–4 years",
      "8 universities in the global top 100 (Group of Eight)",
      "High minimum wage for part-time student work",
      "Strong support for international students",
    ],
    visa: {
      name: "Student visa (subclass 500)",
      summary:
        "The subclass 500 visa lets you stay in Australia to study a registered course once you have a Confirmation of Enrolment (CoE).",
      processingTime: "4–6 weeks on average",
      financialProof: "Tuition + AU$24,505/year living costs",
      workRights: "48 hrs/fortnight during term; unlimited in breaks",
      postStudy: "Temporary Graduate visa (subclass 485), 2–4 years",
    },
    immigrationSteps: [
      {
        title: "Receive your CoE",
        description:
          "Accept your offer and pay the deposit to get a Confirmation of Enrolment.",
      },
      {
        title: "Prepare your GTE statement",
        description:
          "Write a Genuine Temporary Entrant statement explaining your study intentions.",
      },
      {
        title: "Arrange OSHC & finances",
        description:
          "Buy Overseas Student Health Cover and gather proof of funds.",
      },
      {
        title: "Lodge your visa application",
        description:
          "Apply online via ImmiAccount with your documents, CoE, OSHC and health/character checks.",
      },
      {
        title: "Complete health & biometrics",
        description:
          "Attend a medical exam and biometrics if requested, then await your grant notice.",
      },
    ],
    studyCriteria: {
      academic: [
        "Completion of Year 12 or equivalent for undergraduate",
        "Bachelor's degree for postgraduate coursework",
        "Program-specific prerequisites may apply",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 6.5" },
        { test: "TOEFL iBT", score: "68 – 90" },
        { test: "PTE Academic", score: "50 – 64" },
      ],
      documents: [
        "Valid passport",
        "Confirmation of Enrolment (CoE)",
        "GTE statement",
        "Proof of funds",
        "OSHC (health cover)",
      ],
      intakes: [
        { name: "Semester 1 (primary)", months: "Feb" },
        { name: "Semester 2", months: "Jul" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "AU$20,000 – AU$40,000 / yr" },
      { label: "Tuition (postgrad)", value: "AU$22,000 – AU$45,000 / yr" },
      { label: "Living expenses", value: "AU$24,000 / yr" },
      { label: "Student visa fee", value: "~AU$1,600" },
    ],
    scholarships: [
      { name: "Australia Awards", detail: "Government-funded scholarships for select nations" },
      { name: "Destination Australia", detail: "AU$15,000/yr for regional study" },
      { name: "University merit scholarships", detail: "10–50% tuition reductions" },
    ],
    popularCourses: [
      "Information Technology",
      "Nursing & Healthcare",
      "Engineering",
      "Accounting & Finance",
      "Hospitality & Tourism",
    ],
    topUniversities: [
      "University of Melbourne",
      "University of Sydney",
      "Australian National University (ANU)",
      "University of Queensland",
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    image: null,
    popular: false,
    rank: "#4 Study Destination",
    rating: 4.7,
    summary:
      "Public universities with little to no tuition fees and a powerhouse economy make Germany an outstanding value destination for engineering and tech.",
    stats: {
      partnerUniversities: "30+",
      tuition: "€0 – €20,000 / year",
      workVisa: "18 months (job-seeker)",
      intake: "Winter, Summer",
    },
    highlights: [
      "No/low tuition at public universities",
      "18-month post-study job-seeker visa",
      "Strong industry links and paid internships",
      "Many English-taught master's programs",
    ],
    visa: {
      name: "German Student Visa (National / D-Visa)",
      summary:
        "A national visa for study; requires a university admission letter and a blocked account showing living funds.",
      processingTime: "6–12 weeks (apply early)",
      financialProof: "Blocked account of ~€11,904/year",
      workRights: "120 full or 240 half days per year",
      postStudy: "18-month residence permit to seek work",
    },
    immigrationSteps: [
      {
        title: "Get university admission",
        description:
          "Receive an admission letter (Zulassungsbescheid) from a recognised German university.",
      },
      {
        title: "Open a blocked account",
        description:
          "Deposit the required living funds into a blocked account (Sperrkonto).",
      },
      {
        title: "Get health insurance",
        description:
          "Arrange German public or private health insurance coverage.",
      },
      {
        title: "Apply at the German mission",
        description:
          "Book an appointment at the embassy/consulate and submit your visa application with all documents.",
      },
      {
        title: "Register after arrival",
        description:
          "Register your address (Anmeldung) and convert to a residence permit at the local Ausländerbehörde.",
      },
    ],
    studyCriteria: {
      academic: [
        "Recognised secondary certificate (may need Studienkolleg)",
        "Bachelor's degree for master's programs",
        "APS certificate required for some countries",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 6.5" },
        { test: "TOEFL iBT", score: "80 – 90" },
        { test: "German (TestDaF)", score: "For German-taught courses" },
      ],
      documents: [
        "Valid passport",
        "University admission letter",
        "Blocked account confirmation",
        "APS certificate (if applicable)",
        "Health insurance proof",
      ],
      intakes: [
        { name: "Winter (primary)", months: "Oct" },
        { name: "Summer", months: "Apr" },
      ],
    },
    costs: [
      { label: "Tuition (public)", value: "€0 + ~€350 semester fee" },
      { label: "Tuition (private)", value: "€5,000 – €20,000 / yr" },
      { label: "Living expenses", value: "€11,900 / yr" },
      { label: "Blocked account", value: "~€11,904" },
    ],
    scholarships: [
      { name: "DAAD Scholarships", detail: "Funded study & research grants" },
      { name: "Deutschlandstipendium", detail: "€300/month merit scholarship" },
      { name: "Erasmus+", detail: "EU mobility funding" },
    ],
    popularCourses: [
      "Mechanical & Automotive Engineering",
      "Computer Science",
      "Renewable Energy",
      "Data & AI",
      "Business Analytics",
    ],
    topUniversities: [
      "Technical University of Munich (TUM)",
      "Ludwig Maximilian University of Munich",
      "Heidelberg University",
      "RWTH Aachen University",
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "Europe",
    image: null,
    popular: false,
    rank: "Rising Study Destination",
    rating: 4.6,
    summary:
      "English-speaking, EU-based and home to the European HQs of global tech giants, Ireland offers strong career prospects after graduation.",
    stats: {
      partnerUniversities: "20+",
      tuition: "€10,000 – €25,000 / year",
      workVisa: "Up to 2 years (Third Level Graduate)",
      intake: "September, January",
    },
    highlights: [
      "2-year stay-back option for master's graduates",
      "European base for Google, Meta, Apple, Pfizer",
      "English-speaking EU member state",
      "Friendly, safe and student-focused culture",
    ],
    visa: {
      name: "Irish Study Visa (D Study Visa)",
      summary:
        "A long-stay D visa for courses over 3 months; requires a letter of acceptance and proof of fees paid.",
      processingTime: "About 4–8 weeks",
      financialProof: "€10,000 available for living costs + fees paid",
      workRights: "20 hrs/week during term; 40 hrs in holidays",
      postStudy: "Third Level Graduate Scheme up to 24 months",
    },
    immigrationSteps: [
      {
        title: "Accept your offer & pay fees",
        description:
          "Secure your place by accepting the offer and paying tuition fees.",
      },
      {
        title: "Prove your finances",
        description:
          "Show at least €10,000 for living costs plus evidence fees are paid.",
      },
      {
        title: "Apply online (AVATS)",
        description:
          "Complete the online visa application and pay the fee.",
      },
      {
        title: "Submit documents",
        description:
          "Send your passport and supporting documents to the visa office.",
      },
      {
        title: "Register with immigration (IRP)",
        description:
          "After arrival, register and receive your Irish Residence Permit.",
      },
    ],
    studyCriteria: {
      academic: [
        "Recognised secondary qualification for undergraduate",
        "Honours bachelor's degree for master's",
        "Relevant background for specialised programs",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 6.5" },
        { test: "TOEFL iBT", score: "80 – 90" },
        { test: "PTE Academic", score: "58 – 63" },
      ],
      documents: [
        "Valid passport",
        "Letter of acceptance",
        "Proof of fees paid",
        "Proof of funds (€10,000)",
        "Academic transcripts",
      ],
      intakes: [
        { name: "September (primary)", months: "Sep" },
        { name: "January", months: "Jan" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "€10,000 – €20,000 / yr" },
      { label: "Tuition (postgrad)", value: "€12,000 – €25,000 / yr" },
      { label: "Living expenses", value: "€10,000 – €14,000 / yr" },
      { label: "Study visa fee", value: "~€60" },
    ],
    scholarships: [
      { name: "Government of Ireland Scholarships", detail: "€10,000 stipend for one year" },
      { name: "University merit awards", detail: "Partial tuition scholarships" },
      { name: "Walsh Fellowships", detail: "Research funding in agri-food/science" },
    ],
    popularCourses: [
      "Computer Science & Data Analytics",
      "Pharmaceutical Science",
      "Business & Finance",
      "Engineering",
      "Biotechnology",
    ],
    topUniversities: [
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "University of Galway",
      "University College Cork (UCC)",
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    region: "Asia-Pacific",
    image: null,
    popular: false,
    rank: "Top Asian Destination",
    rating: 4.7,
    summary:
      "A world-class education hub and global business capital, Singapore pairs top-ranked universities with one of the safest, most connected cities in Asia.",
    stats: {
      partnerUniversities: "15+",
      tuition: "SGD $20,000 – $40,000 / year",
      workVisa: "Work pass pathways after study",
      intake: "August, January",
    },
    highlights: [
      "2 universities in the global top 20",
      "Leading business and finance hub of Asia",
      "Safe, modern and highly efficient city-state",
      "Strategic gateway to the rest of Asia",
    ],
    visa: {
      name: "Student's Pass",
      summary:
        "Full-time students at an approved institution apply for a Student's Pass through the ICA SOLAR+ system after accepting their offer.",
      processingTime: "Around 4 weeks",
      financialProof: "Proof of funds covering tuition and living costs",
      workRights: "Up to 16 hrs/week during term at eligible institutions",
      postStudy: "Work pass options (e.g. Employment Pass) once employed",
    },
    immigrationSteps: [
      {
        title: "Accept your offer",
        description:
          "Receive and accept an offer from an approved Singapore institution.",
      },
      {
        title: "Register in SOLAR+",
        description:
          "Your institution registers your Student's Pass application in the ICA SOLAR+ system.",
      },
      {
        title: "Submit the eForm 16",
        description:
          "Complete the eForm 16 online and pay the processing fee.",
      },
      {
        title: "Arrive & complete formalities",
        description:
          "Enter Singapore and complete formalities to have your Student's Pass issued.",
      },
      {
        title: "Medical & card issuance",
        description:
          "Complete a medical exam if required and collect your pass card.",
      },
    ],
    studyCriteria: {
      academic: [
        "Strong secondary results for undergraduate entry",
        "A relevant bachelor's degree for postgraduate study",
        "Competitive GPA and, for some programs, entrance tests",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 6.5" },
        { test: "TOEFL iBT", score: "85 – 100" },
        { test: "PTE Academic", score: "58 – 65" },
      ],
      documents: [
        "Valid passport",
        "Academic transcripts",
        "Statement of purpose",
        "Proof of funds",
        "Passport-size photographs",
      ],
      intakes: [
        { name: "August (primary)", months: "Aug" },
        { name: "January", months: "Jan" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "SGD $20,000 – $35,000 / yr" },
      { label: "Tuition (postgrad)", value: "SGD $25,000 – $40,000 / yr" },
      { label: "Living expenses", value: "SGD $12,000 – $18,000 / yr" },
      { label: "Student's Pass fee", value: "~SGD $90" },
    ],
    scholarships: [
      { name: "Singapore Government (MOE) awards", detail: "Merit awards & tuition grants" },
      { name: "University scholarships", detail: "Merit-based awards at NUS, NTU & others" },
      { name: "ASEAN scholarships", detail: "Regional funding for eligible students" },
    ],
    popularCourses: [
      "Business",
      "Finance",
      "Engineering",
      "Computer Science",
      "Hospitality",
    ],
    topUniversities: [
      "National University of Singapore (NUS)",
      "Nanyang Technological University (NTU)",
      "Singapore Management University (SMU)",
      "Singapore University of Technology & Design (SUTD)",
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Asia-Pacific",
    image: null,
    popular: false,
    rank: "Quality Education Hub",
    rating: 4.6,
    summary:
      "Globally ranked universities, generous post-study work rights and breathtaking scenery make New Zealand a welcoming, high-quality study destination.",
    stats: {
      partnerUniversities: "18+",
      tuition: "NZD $20,000 – $35,000 / year",
      workVisa: "Up to 3 years (post-study)",
      intake: "February, July",
    },
    highlights: [
      "All 8 universities ranked in the world's top 3%",
      "Post-study work visa of up to 3 years",
      "Stunning natural environment and outdoor lifestyle",
      "Safe, welcoming and student-friendly culture",
    ],
    visa: {
      name: "Fee Paying Student Visa",
      summary:
        "Students enrolled full-time in an approved course apply online to Immigration New Zealand for a student visa.",
      processingTime: "Around 4–8 weeks",
      financialProof: "NZD $20,000/year living costs plus tuition paid",
      workRights: "Up to 20 hrs/week during term; full-time in breaks",
      postStudy: "Post-study work visa up to 3 years by qualification level",
    },
    immigrationSteps: [
      {
        title: "Get your offer of place",
        description:
          "Receive and accept an offer from an approved New Zealand institution.",
      },
      {
        title: "Pay tuition & prove funds",
        description:
          "Pay fees and show evidence of living costs (NZD $20,000/year).",
      },
      {
        title: "Apply online",
        description:
          "Complete the student visa application with Immigration New Zealand.",
      },
      {
        title: "Health & character checks",
        description:
          "Provide medical and police certificates if required.",
      },
      {
        title: "Receive your visa",
        description:
          "On approval, receive your e-visa and prepare for arrival.",
      },
    ],
    studyCriteria: {
      academic: [
        "Completion of secondary school for undergraduate entry",
        "A bachelor's degree for postgraduate programs",
        "Program-specific prerequisites may apply",
      ],
      english: [
        { test: "IELTS", score: "6.0 – 6.5" },
        { test: "TOEFL iBT", score: "80 – 90" },
        { test: "PTE Academic", score: "50 – 64" },
      ],
      documents: [
        "Valid passport",
        "Offer of place",
        "Proof of funds",
        "Academic transcripts",
        "Medical & police certificates (if required)",
      ],
      intakes: [
        { name: "Semester 1 (primary)", months: "Feb" },
        { name: "Semester 2", months: "Jul" },
      ],
    },
    costs: [
      { label: "Tuition (undergrad)", value: "NZD $22,000 – $32,000 / yr" },
      { label: "Tuition (postgrad)", value: "NZD $26,000 – $37,000 / yr" },
      { label: "Living expenses", value: "NZD $20,000 / yr" },
      { label: "Student visa fee", value: "~NZD $375" },
    ],
    scholarships: [
      { name: "New Zealand Scholarships", detail: "Government-funded awards for international students" },
      { name: "University excellence scholarships", detail: "Merit-based tuition reductions" },
      { name: "Manaaki Scholarships", detail: "Fully funded options for select countries" },
    ],
    popularCourses: [
      "Agriculture",
      "Environmental Science",
      "Tourism",
      "Information Technology",
      "Business",
    ],
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
    ],
  },
];

export const getDestination = (slug) =>
  destinations.find((d) => d.slug === slug);
