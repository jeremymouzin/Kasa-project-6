import '../styles/Apartment.css'
import { Link } from 'react-router-dom'

function Apartment({id, title, cover}) {
  

    return (
        <Link to={`Flat/${id}`} > 
        <div className='Apartment'>
            <h3>{title}</h3>
            <img src={cover} alt={title} />
            </div>
            </Link>
    )
}

export default Apartment