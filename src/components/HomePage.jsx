// Importa tus componentes
import HeroHeaderSection from "./HeroHeaderSection/HeroHeaderSection";
import Featured from "./Featured/Featured";
import Ecommerce from "./ShopSection/ShopSection";
import ContactInfo from "./ContactInfo/ContactInfo";

// Define el componente de la página de inicio (HomePage)
function HomePage() {
  return (
    <div>
      <HeroHeaderSection />
      <Featured />
      <Ecommerce />
      <ContactInfo />
    </div>
  );
}

export default HomePage;
