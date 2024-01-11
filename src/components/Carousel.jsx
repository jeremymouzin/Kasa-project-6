import '../styles/Carousel.css'
import arrowLeft  from '../images/chevron_carousel_left.png'
import arrowRight  from '../images/chevron_carousel_right.png'
 import React, { useState } from 'react';

function Carousel() {
 

  const [index, setIndex] = useState(1);
  const length = 3;
  
  const handlePrevious = () => {
  const newIndex = index-1;
  setIndex(newIndex < 1 ? length : newIndex);
  };
  
  const handleNext = () => {
  const newIndex = index + 1;
  setIndex(newIndex >= length + 1 ? 1 : newIndex);
  };
  
  
    return (
          
            <div className='carousel-content'>
             <div className = "slide left" onClick = {handlePrevious}  ><img src=  {arrowLeft}  alt="arrowLeft" /></div>
            <div className='slide right' onClick= {handleNext}><img src=  {arrowRight}  alt="arrowRight" /></div>
            <div className='carousel-content__pages'>  {index}/{length} </div>
            </div>  
  ) }
 


export default Carousel 