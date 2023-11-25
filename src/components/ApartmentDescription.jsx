import '../styles/Description.css'
import Description from './Description'
import '../styles/ApartmentDescription.css'
import Equipment from './Equipment'


function ApartmentDescription() {
    
        return (
            <div className='Apartment__description__flex'>
            <Description/>
            <Equipment/>
            </div>
          
        )
    
}


export default ApartmentDescription