import React from 'react'
import style from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  return (
    <div className="container d-flex flex-column align-items-center">
<h1 className={`${style.colorcontact} fs-1 fw-bold`}>CONTACT ME</h1>
                <p className={`${style.colorcontact}`}><span className={`${style.colorcontact} fs-1 fw-bold`}>ــــــــــــــ</span>   <FontAwesomeIcon icon={faStar} size="2x" /><span className={`${style.colorcontact} fs-1 fw-bold`} >ــــــــــــــ</span> </p>
                
   <form className='w-50'>
  <div className="form-floating mb-4">
    <input
      type="text"
      className="form-control border-0 border-bottom rounded-0 shadow-none"
      id="name"
      placeholder="Full name"
    />
    <label htmlFor="name" className='fs-5'>Full name</label>
  </div>

  <div className="form-floating mb-4">
  <input
    type="email"
    className="form-control border-0 border-bottom rounded-0 shadow-none"
    id="email"
    placeholder="Email address"
  />
  <label htmlFor="email" className='fs-5'>Email address</label>
</div>

<div className="form-floating mb-4">
  <input
    type="tel"
    className="form-control border-0 border-bottom rounded-0 shadow-none"
    id="phone"
    placeholder="Phone number"
  />
  <label htmlFor="phone" className='fs-5'>Phone number</label>
</div>
<div className="form-floating mb-4">
  <textarea
    className={`form-control border-0 border-bottom rounded-0 shadow-none `}
    id="message"
    placeholder="Message"
    style={{height:'120px'}}
   
  ></textarea>
  <label htmlFor="message" className='fs-5'>Message</label>
</div>
<button className={`${style.buttoncolor}   px-3 py-2 text-white opacity-75 rounded-1`} >
  Send
</button>

</form>

</div>
  )
}
