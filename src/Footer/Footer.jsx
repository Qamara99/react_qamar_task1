import React from 'react'
import style from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBasketball } from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
    return (
        <>
        <div className={`container-fluid ${style.footercolor} py-5 mt-5`}>
            <div className="row d-flex justify-content-center align-items-center ">
                <div className=" col-lg-3 col-md-3 col-xl-3">
                    <div className="d-flex flex-column">
                        <h5 className='text-white pb-3 fs-5'>LOCATION</h5>
                        <span className='text-white'>2215 John Daniel Drive</span>
                        <span className='text-white'>Clark, MO 65243</span>
                    </div>
                </div>

                <div className=" col-lg-3 col-md-3 col-xl-3">
                    <div className="d-flex flex-column">
                        <h5 className='text-white fs-5 pb-3'>AROUND THE WEB</h5>
                        <div className="d-flex gap-2">
<div className={`d-inline-flex justify-content-center align-items-center 
                border border-2 rounded-circle ${style.icondesign} text-white`}><FontAwesomeIcon icon={faFacebookF} size='1x' /></div>
<div className={`d-inline-flex justify-content-center align-items-center 
                border border-2 rounded-circle ${style.icondesign}  text-white`}><FontAwesomeIcon icon={faTwitter} size='1x'/></div>
<div className={`d-inline-flex justify-content-center align-items-center 
                border border-2 rounded-circle ${style.icondesign }  text-white`}><FontAwesomeIcon icon={faInstagram} size='1x'/></div>
<div className={`d-inline-flex justify-content-center align-items-center 
                border border-2 rounded-circle ${style.icondesign }  text-white`}><FontAwesomeIcon icon={faBasketball} size='1x'/></div>

                        </div>
                      </div>
                </div>

                <div className=" col-lg-3 col-md-3 col-xl-3">
                    <div className="d-flex flex-column">
                        <h5 className='text-white fw-bold pb-3'>ABOUT FREELANCER</h5>
                        <span className='text-white'>Freelance is a free to use, MIT licensed</span>
                        <span className='text-white'>Bootstrap theme created by <a href='#' className={`text-decoration-underline ${style.linkcolor}`}>Start Bootstrap</a>  .</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${style.footer2color} py-3 container-fluid  d-flex justify-content-center align-items-center`}>
    <span className={`text-white ${style.fontfooter} `}>Copyright © Your Website 2023</span>
</div>
</>
    )
}
