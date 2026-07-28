import Destinations from "../components/home/destinations";
import Hero from "../components/home/hero";
import HeroInfo from "../components/home/homeinfo";
import Services from "../components/home/services";
import Testimonial from "../components/home/testimonial";
import WhyChoseUs from "../components/home/why-chose-us";
import Reveal from "../components/reveal";

function Home() {
  return (
    <div className="bg-[#f5f5f5] dark:bg-neutral-950">
      <Hero />
      <div className="w-full max-w-300 mx-auto px-4 space-y-20 py-10">
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <WhyChoseUs />
        </Reveal>
        <Reveal>
          <Destinations />
        </Reveal>
        <Reveal>
          <Testimonial />
        </Reveal>
        <Reveal>
          <HeroInfo />
        </Reveal>
      </div>
    </div>
  );
}

export default Home;
