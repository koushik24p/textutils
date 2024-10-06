import React from 'react'
//import { Link } from 'react-router-dom'

export default function Navbar(props) {
  let myStyle={
border: '4px solid #1ABC9C'
  }
    
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={myStyle}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button"  aria-controls="navbarSupportedContent" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light' }`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mc-3"  htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
      </div>
    </div>
    
  </nav>
    
  )
}
