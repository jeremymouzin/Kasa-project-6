// import '../styles/Description.css'
import '../styles/Equipment.css'

function Equipment() {
    
        return (
            <div className='description'>
                <p className='description__header'>
                    <span>Équipements</span>
                    <i className='fas fa-chevron-down'></i>
                </p>

                <p className='description__content'>
                   <li>Climatisation</li>
                   <li>Wi-Fi</li>
                   <li>Cuisine</li>
                   <li>Espace de travail</li>
                   <li>Fer à repasser</li>
                   <li>Sèche-cheveux</li>
                   <li>Cintres</li>
                </p>
            </div>
        )
    
}

export default Equipment