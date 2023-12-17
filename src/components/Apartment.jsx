import '../styles/Apartment.css'
import { Link } from 'react-router-dom'

function Apartment({id, title, cover}) {
  

    return (
        <Link to={`Flat/${id}`} > 
        <div className='Apartment'>
            <p>{title}</p>
            <img src={cover} alt={title} />
            </div>
            </Link>
    )
}

export default Apartment