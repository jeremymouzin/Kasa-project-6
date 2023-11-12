import '../styles/Carousel.css'
import arrowLeft  from '../images/chevron_carousel_left.png'
import arrowRight  from '../images/chevron_carousel_right.png'

function Carousel() {
    return (
        
            <div className='carousel-content'>
             <div className = "slide left"><img src=  {arrowLeft}  alt="arrowLeft" /></div>
            <div className='slide right'><img src=  {arrowRight}  alt="arrowRight" /></div>
            <div className='carousel-content__pages'>1/4</div>
            </div>  
  ) }
 


export default Carousel 