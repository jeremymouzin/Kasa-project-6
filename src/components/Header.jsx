import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Header.css'

function Header() {

    return (
        <nav className='nav-header'>
        <div className='nav-img'>
        <img src={logo} alt='kasa' id='nav-logo' />
        </div>
        <div className='nav-link'>
        <NavLink className='sign' to='/'>Accueil</NavLink>
        <NavLink className = 'sign-up' to='/about'>A Propos</NavLink> 
        </div>
        </nav> 
    )
}

export default Header 