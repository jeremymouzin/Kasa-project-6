import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Header.css'

function Header() {

    return (
        <nav className='nav-header'>
        <div className='nav-img'>
        <img src={logo} alt='kasa' id='nav-logo' />
        </div>
        <div className='nav-link'>
        <Link className='sign' to={''}>Accueil</Link>
        <Link className = 'sign-up' to={''}>A propos</Link> 
        </div>
        </nav> 
    )
    
    

}

export default Header 