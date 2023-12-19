import '../styles/Flat.css'
import { Link } from 'react-router-dom'

function Flat({id, title, cover}) {
  

    return (
        <Link to={`Flat/${id}`} > 
        <div className='flat'>
            <h3>{title}</h3>
            <img src={cover} alt={title} />
            </div>
            </Link>
    )
}

export default Flat