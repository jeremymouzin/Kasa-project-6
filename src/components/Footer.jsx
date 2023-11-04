import footer from '../images/footer.png'
import '../styles/Footer.css'

function Footer() {

    return (
        <div className='footer__block'>
           <div className='footer__img'>
           <img src={footer} alt='kasa' id='footer__logo' />
           </div>
           <p className='footer__credit'>© 2023 Kasa. All right reserved</p>
        </div>
    ) }


export default Footer