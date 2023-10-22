import footer from '../images/footer.png'
import '../styles/Footer.css'
function Footer() {

    return (
        <div className='footer-nav'>
           <div className='footer-block'>
           <img src={footer} alt='kasa' id='footer-logo' />
           </div>
           <p className='footer-credit'>© 2020 Kasa. All right reserved</p>
        </div>
    ) }


export default Footer