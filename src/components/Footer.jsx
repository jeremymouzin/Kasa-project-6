import footer from '../images/footer.png'
import '../styles/Footer.css'

function Footer() {

    return (
        <div className='footer__nav'>
           <div className='footer__block'>
           <img src={footer} alt='kasa' id='footer__logo' />
           </div>
           <p className='footer__credit'>© 2020 Kasa. All right reserved</p>
        </div>
    ) }


export default Footer