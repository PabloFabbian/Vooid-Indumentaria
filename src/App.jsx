import NavBar from './components/ANavbar/NavBar'
import HeroHeaderSection from './components/BHeroHeaderSection/HeroHeaderSection'
import Featured from './components/CFeatured/Featured'
import Ecommerce from './components/DEcommerce/Ecommerce'
import MyFooter from './components/FFooter/MyFooter'
import ContactInfo from './components/EContactInfo/ContactInfo'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HeroHeaderSection></HeroHeaderSection>
      <Featured></Featured>
      <Ecommerce></Ecommerce>
      <ContactInfo></ContactInfo>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App