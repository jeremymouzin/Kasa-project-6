import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import Main from "../components/Main"
import datasFlat from '../assets/data.json'

function Home() {
    
    return <> 
      <Header/>
      <Main>
      <Banner/>
      <Gallery data={datasFlat} />
      </Main>
      <Footer/>
      </>
}

export default Home