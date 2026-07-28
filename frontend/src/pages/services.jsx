import Faq from "../components/services/faq";
import FinalCta from "../components/services/finalCta";
import Guarantee from "../components/services/guarantee";
import HeadServices from "../components/services/head";
import OurServices from "../components/services/our-services";
import Packages from "../components/services/packages";
import ProcessSteps from "../components/services/processSteps";
import Reveal from "../components/reveal";

function Services() {
  return (
    <div>
      <HeadServices />
      <div className="w-full max-w-300 mx-auto px-4 lg:space-y-20">
        <Reveal>
          <OurServices />
        </Reveal>
        <Reveal>
          <ProcessSteps />
        </Reveal>
        <Reveal>
          <Packages />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <Guarantee />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
      </div>
    </div>
  );
}

export default Services;
