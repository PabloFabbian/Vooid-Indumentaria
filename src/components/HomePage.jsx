import HeroSection from "./HeroSection/HeroSection";
import Testimonials from "./Testimonials/Testimonials";
import Featured from "./Featured/Featured";
import Ecommerce from "./ShopSection/ShopSection";
import ContactInfo from "./ContactInfo/ContactInfo";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Testimonials />
      <Featured />
      <Ecommerce />
      <ContactInfo />
    </div>
  );
}

export default HomePage;
