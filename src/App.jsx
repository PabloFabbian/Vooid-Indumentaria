import NavBar from './components/Navbar/NavBar'
import HeroHeaderSection from './components/HeroHeaderSection/HeroHeaderSection'
import Featured from './components/Featured/Featured'
import Ecommerce from './components/ShopSection/ShopSection'
import MyFooter from './components/Footer/MyFooter'
import ContactInfo from './components/ContactInfo/ContactInfo'

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