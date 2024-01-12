import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import Information from "../components/Information"
import ApartmentDescription from "../components/ApartmentDescription"
import Slides from "../assets/data.json"



function Flat() {
    
    return <> 
      <Header/>
      <Carousel data= {Slides} />
      <Information/>
      <ApartmentDescription/>
      <Footer/>
      </>
}

export default Flat