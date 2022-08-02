import React from 'react'
import logo from '../my-images/logo-bookmark.svg'

const Nav = () => {
  return (
    <div className="container-fluid bg-light">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">



        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className=" collapse navbar-collapse" id="navbarTogglerDemo02">
          <a href='#'><img src={logo} alt='' /></a>


          <div className='container navAncho d-flex justify-items-sm-end '>
          <a className="Ancho d-flex-sm text-dark nav-link" aria-current="page" href="index.html">FEATURES</a>
          <a className="Ancho d-flex-sm text-dark nav-link" href="index.html">PRICING</a>
          <a className="Ancho d-flex-sm text-dark nav-link" href="index.html">CONTACT</a>
          <button className="d-flex-sm btn  btn1">LOGIN</button>
          </div>
          
        </div>




      </nav>

    </div>

  )
}

export default Nav