import React from 'react'
import faceHero from './../assets/images/avataaars.svg'
import style from './hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
  return (
    <header className={`${style.bgContainer} d-flex flex-column justify-content-center align-items-center m-0 gap-2 pt-5`}>
         

<img src={faceHero} width="200px" />
<h1 className='text-white text-uppercase fw-bold fs-1 pt-3'>start bootstrap</h1>


       <p><span className='fs-1 text-white fw-bold '>ـــــــــــــــــ</span>   <FontAwesomeIcon icon={faStar} size="2x" color="white" /><span  className='fs-1 text-white fw-bold'>ـــــــــــــــــ</span> </p>
   


  
      
  <p className='text-white fs-4'>Graphic Artist - Web Designer - Illustrator</p>

    </header>
  
  )
}
