import '../styles/Carousel.css'
import arrowLeft  from '../images/chevron_carousel_left.png'
import arrowRight  from '../images/chevron_carousel_right.png'
import React, { useState } from 'react';

function Carousel({pictures}) {
 
  const [index, setIndex] = useState(0); //création d'un hook à l'état 0
  const length = pictures.length // décompte du nombre d'images
  
  const handlePrevious = () => { //creation de la fonction pour décrementer
  const newIndex = index-1; 
  setIndex(newIndex < 0 ? length-1: newIndex); 
  };
  
  const handleNext = () => { //creation de la fonction pour incrementer 
  const newIndex = index + 1;
  setIndex(newIndex >= length ? 0 : newIndex);
  };
  
    return (
          
            <div className='carousel-content'>
              <img src= {pictures[index]} alt="" className='pictures'/>
             <div className = "slide left" onClick ={handlePrevious} ><img src=  {arrowLeft}  alt="arrowLeft" /></div>
            <div className='slide right' onClick= {handleNext}><img src=  {arrowRight}  alt="arrowRight" /></div>
            <div className='carousel-content__pages'>{index+1}/{pictures.length} </div>
            </div>  
  ) }
 


export default Carousel 