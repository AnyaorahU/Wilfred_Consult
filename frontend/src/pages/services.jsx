import Faq from "../components/services/faq";
import FinalCta from "../components/services/finalCta";
import Guarantee from "../components/services/guarantee";
import HeadServices from "../components/services/head";
import OurServices from "../components/services/our-services";
import Packages from "../components/services/packages";
import ProcessSteps from "../components/services/processSteps";

function Services() {
  return (
    <div>
      <HeadServices />
      <div className="mx-auto w-300 lg:space-y-20">
        <OurServices />
        <ProcessSteps />
        <Packages />
        <Faq />
        <Guarantee />
        <FinalCta />
      </div>
    </div>
  );
}

export default Services;
