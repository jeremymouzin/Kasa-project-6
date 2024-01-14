
import '../styles/Collapse.css'
import '../styles/ApartmentDescription.css'
import '../styles/Description.css'
import Description from './Description'


function ApartmentDescription({description, equipment}) {
    
        return (
            <div className='Apartment__description__flex'>
            <Description title ="Description" content ={description} />
            <Description title ="Equipements" content ={equipment}  />
            </div>
        )
    
}


export default ApartmentDescription