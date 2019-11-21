import React from 'react';
import Logo from '../../../assets/logo/ahmed-logo.png'

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top trns-nav">
             <div className="container">
              <a className="navbar-brand" href="index.html"><img src={Logo} width="50" height="50" className="d-inline-block align-top" alt="logo" title="logo" /> </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-icon"></span>
                <span className="navbar-icon"></span>
                <span className="navbar-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav main ml-auto move-right" id="navbar-links">
                  <li className="nav-item" >
                    <a className="nav-link active" data-scroll="#know" href="#!">Know me <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link" data-scroll="#work" href="#!">Work</a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link" data-scroll="#skills" href="#!">Skills &amp; Educations</a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link" data-scroll="#services" href="#!">Services</a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link mr-0" data-scroll="#contact" href="#!">Contact </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto new-dir" id="navbar-links">
                    <li className="nav-item" >
                            <a href="https://www.facebook.com/profile.php?id=100025118989134" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="nav-item" >
                            <a href="https://github.com/ahmed-1212" target="_blank"><i className="fab fa-github"></i></a>
                    </li>
                    <li className="nav-item" >
                            <a className="mr-0" href="https://www.linkedin.com/in/ahmed-dhafer-016124162/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
              </div>
            </div>
           </nav>
    )
}


export default Navbar;