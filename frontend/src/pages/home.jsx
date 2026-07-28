import Destinations from "../components/home/destinations";
import Hero from "../components/home/hero";
import HeroInfo from "../components/home/homeinfo";
import Services from "../components/home/services";
import Testimonial from "../components/home/testimonial";
import WhyChoseUs from "../components/home/why-chose-us";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <Hero />
      <div className="w-300 mx-auto space-y-20 py-10">
        <Services />
        <WhyChoseUs />
        <Destinations />
        <Testimonial />
        <HeroInfo />
      </div>
    </div>
  );
}

export default Home;
