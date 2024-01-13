import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import Information from "../components/Information"
import ApartmentDescription from "../components/ApartmentDescription"
import data from "../assets/data.json"
import { useParams } from "react-router-dom"



function Flat() {
    
  const params = useParams() //recupération du paramètre dans l'url 
console.log(params)

const flat = data.find((data)=> params.id === data.id) //ciblage l'id de l'url correspondant à celui des données 
console.log(flat.host.name.split(' '))


    return <> 
      <Header/>
      <Carousel pictures={flat.pictures} />    
      <Information title={flat.title} location={flat.location} rating={flat.rating} name={flat.host.name.split(' ')} tag={flat.tags.map((flat)=> { return <p>{flat}</p>})} photo={flat.host.picture} />
      <ApartmentDescription/>
      <Footer/>
      </>
}

export default Flat