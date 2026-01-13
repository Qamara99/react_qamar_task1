import React from 'react'
import style from './navbar.module.css'
export default function Navbar() {
  return (
  <nav className={`${style.bg} navbar navbar-expand-lg fixed-top p-4`}>
  <div className="container">
    <a className="navbar-brand text-uppercase text-white fw-bold ms-5 fs-3" href="#">Start Bootstrap
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto text-uppercase fw-bold me-5 gap-3">
        <li className="nav-item ">
          <a className="nav-link active text-white" aria-current="page" href="#">portfolio</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">about</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">contact</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}
