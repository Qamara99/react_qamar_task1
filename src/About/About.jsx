import React from 'react'
import style from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
export default function About() {
  return (
      <header className={`${style.bgContainer} d-flex flex-column  align-items-center mt-5 mb-5  pt-5`}>
  <div className="d-flex text-center align-items-center justify-content-center flex-column">
                <h1 className={`text-white fs-1 fw-bold`}>ABOUT</h1>
                <p className={`text-white  fs-2 `}><span className={`text-white fs-3 fw-bold`}>ـــــــــــــــــ</span><FontAwesomeIcon icon={faStar}  /><span className={`text-white fs-3 fw-bold`} >ـــــــــــــــــ</span> </p>
                <div className="row  w-50">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <p className='text-white  text-start'>
                            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                     <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <p className='text-white  text-start'>
You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!                        </p>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-light p-2 fs-5 mt-3"><FontAwesomeIcon icon={faDownload} />Free Download!</button>
               </div>
  </header>
  )
}
