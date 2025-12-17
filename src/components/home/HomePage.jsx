import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import Featured from "./Featured";
import ContactInfo from "../layout/ContactInfo";
import VooidShop from "../shop/VooidShop";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <Featured />
      <VooidShop />
      <ContactInfo />
    </div>
  );
}

export default HomePage;