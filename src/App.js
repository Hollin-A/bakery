import {Header} from './components/Header.js'
import {OurProducts} from './components/OurProducts.js'
import {AboutCompany} from './components/AboutCompany.js'
import {Discount} from './components/Discount.js'
import {OurBread} from './components/OurBread.js'
import {AboutCompanyDesserts} from './components/AboutCompanyDesserts.js'
import {OurPerformance} from './components/OurPerformance.js'
import {OurGallery} from './components/OurGallery.js'
import {Welcome} from './components/Welcome.js'
import {ContactUs} from './components/ContactUs.js'
import {Footer} from './components/Footer.js'

function App() {
  return (
    <>
    <Header/>
    <OurProducts />
    <AboutCompany />
    <Discount />
    <OurBread />
    <AboutCompanyDesserts/>
    <OurPerformance/>
    <OurGallery/>
    <Welcome/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default App;
