import Header from "../components/Header"
import Footer from "../components/Footer"
import BannerAbout from "../components/BannerAbout"
import Main from "../components/Main"
import ApartmentDescriptionAbout from "../components/ApartmentDescriptionAbout"

function About() {
    
    return <> 
      <Header/>
      <Main>
      <BannerAbout/>
      <ApartmentDescriptionAbout/>
      </Main>
      <Footer/>
      </>
}

export default About