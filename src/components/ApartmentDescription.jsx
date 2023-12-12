
import '../styles/Collapse.css'
import '../styles/ApartmentDescription.css'
import '../styles/Description.css'
import Description from './Description'


function ApartmentDescription() {
    
const datasflat= "Vous serez à 50m du canal Saint-martin où vous pourrez pique niquer l'été et à côté de nombreux bars et restaurants.Au coeur de Paris avec 5 lignes et de bus. Logement parfait pour les voyageurs en solo et les voyages d'affaires. Vous êtes à une station de la gare de l'est (7 minutes à pied)"
const datasequipement = [
    {
        id : 1,
        content : "Climatisation"
    },

    {
        id : 2,
        content : "Cuisine"
    },

    {
        id : 3,
        content : "Espace de travail",
    },

    {
        id : 4,
        content : "Fer à repasser",
    },

    {
        id : 5,
        content : "Sèche-cheveux"
    },

    {
        id : 6,
        content : "Cintres"
    }
]

        return (
            <div className='Apartment__description__flex'>
            <Description title ="Description" content ={datasflat} />
            <Description title ="Equipements" content ={datasequipement}  />
            </div>
        )
    
}


export default ApartmentDescription