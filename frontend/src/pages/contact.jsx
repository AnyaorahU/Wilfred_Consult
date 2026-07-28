import { ContactHead } from "../components/contact/head";
import { BookSection } from "../components/contact/book.section";
import { GlobalOffices } from "../components/contact/offices";
import { ContactFaq } from "../components/contact/faq";
import { JourneyCTA } from "../components/contact/journey.cta";
import Reveal from "../components/reveal";

function Contact() {
  return (
    <div>
      <ContactHead />
      <Reveal>
        <BookSection />
      </Reveal>
      <Reveal>
        <GlobalOffices />
      </Reveal>
      <Reveal>
        <ContactFaq />
      </Reveal>
      <Reveal>
        <JourneyCTA />
      </Reveal>
    </div>
  );
}

export default Contact;
