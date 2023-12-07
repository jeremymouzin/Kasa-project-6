import Description from './Description'
import Equipment from './Equipment'
import '../styles/Description.css'
import '../styles/ApartmentDescription.css'


function ApartmentDescription() {
    
        return (
            <div className='Apartment__description__flex'>
            <Description/>
            <Equipment/>
            </div>
          
        )
    
}


export default ApartmentDescription