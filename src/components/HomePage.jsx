import HeroSection from "./HeroSection/HeroSection";
import Testimonials from "./Testimonials/Testimonials";
import Featured from "./Featured/Featured";
import ContactInfo from "./ContactInfo/ContactInfo";
import VooidShop from "./VooidShop/VooidShop";

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
