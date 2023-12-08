import '../styles/Equipment.css'

function Equipment() {
    
        return (
            <div className='equipment'>
                <details> 
                <summary className='equipment__header'>
                    <span>Équipements</span>
                </summary>
            
                <p className='equipment__content'>
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