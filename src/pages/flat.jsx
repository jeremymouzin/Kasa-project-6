import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import Information from "../components/Information"
import ApartmentDescription from "../components/ApartmentDescription"
import data from "../assets/data.json"
import { useParams } from "react-router-dom"



function Flat() {
    
const params = useParams() //recupération de l'id dans l'url 

const flat = data.find((data)=> params.id === data.id) //ciblage de l'id de l'url correspondant à celui du fichier JSON 
console.log(flat.id)


    return <> 

   
      <Header/>
      <Carousel pictures={flat.pictures} />    
      <Information title={flat.title} location={flat.location} rating={flat.rating} name={flat.host.name.split(' ')} tags={flat.tags} photo={flat.host.picture}  />
      <ApartmentDescription description={flat.description} equipment={flat.equipments} />
      <Footer/>
      </>
}

export default Flat