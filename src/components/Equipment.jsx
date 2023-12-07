import '../styles/Equipment.css'

function Equipment() {
    
        return (
            <div className='description'>
                <details> 
                <summary className='description__header'>
                    <span>Équipements</span>
                </summary>
            
                <p className='description__content'>
                   <li>Climatisation</li>
                   <li>Wi-Fi</li>
                   <li>Cuisine</li>
                   <li>Espace de travail</li>
                   <li>Fer à repasser</li>
                   <li>Sèche-cheveux</li>
                   <li>Cintres</li>
                </p>
                </details>
            </div>
            
        )
    
}

export default Equipment