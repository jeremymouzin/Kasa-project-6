import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpg'
import '../styles/Header.css'

function Header() {

    return (
        <nav className='nav__header'>
        <div className='nav__img'>
        <img src={logo} alt='kasa' id='nav__logo' />
        </div>
        <div className='nav__link'>
        <NavLink className='sign' to='/'>Accueil</NavLink>
        <NavLink className = 'sign__up' to='/about'>A Propos</NavLink> 
        </div>
        </nav> 
    )
}

export default Header 