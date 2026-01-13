import React from 'react'
import style from './portfolio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// images
import cabin from './../assets/images/cabin.png'
import cake from './../assets/images/cake.png'
import circus from './../assets/images/circus.png'
import game from './../assets/images/game.png'
import safe from './../assets/images/safe.png'
import submarine from './../assets/images/submarine.png'
export default function Portfolio() {
    return (
        <section className='mt-5'>
            <div className="d-flex text-center align-items-center justify-content-center flex-column">
                <h1 className={`${style.colorportfolio} fs-1 fw-bold`}>PORTFOLIO</h1>
                <p className={`${style.colorportfolio}`}><span className={`${style.colorportfolio} fs-1 fw-bold`}>ــــــــــــــ</span>   <FontAwesomeIcon icon={faStar} size="2x" /><span className={`${style.colorportfolio} fs-1 fw-bold`} >ــــــــــــــ</span> </p>
                <div className="row mt-3 ">
                    <div className=" col-lg-4 col-md-4 col-xl-4">
                        <img src={cabin} width="300px" className='rounded-1'/></div>
                    <div className=" col-lg-4 col-md-4 col-xl-4">
                        <img src={cake} width="300px" className='rounded-1'/>  </div>
                    <div className=" col-lg-4 col-md-4 col-xl-4">
                        <img src={circus} width="300px" className='rounded-1'/>
                    </div>

                </div>

                 <div className="row mt-5 ">
                    <div className=" col-lg-4 col-md-4 col-xl-4">
                        <img src={game} width="300px" className='rounded-1'/></div>
                    <div className=" col-lg-4 col-md-4 col-xl-4">
                        <img src={safe} width="300px" className='rounded-1'/>  </div>
                    <div className=" col-lg-4 col-md-4 col-xl-4">
                        <img src={submarine} width="300px" className='rounded-1' />
                    </div>

                </div>
            </div>

        </section>
    )
}
