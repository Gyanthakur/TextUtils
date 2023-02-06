import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
         {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        </li>
      </ul>
      <div className='d-flex'>
        <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
        <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}} ></div>
        <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px',width:'30px',cursor:'pointer',}} ></div>
        <div className="bg-light rounded mx-2 " onClick={()=>{props.toggleMode('light')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid red'}} ></div>
        <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px',width:'30px',cursor:'pointer',border:'3px solid red'}} ></div>

      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        
      </form> */}
      {/* <div className={`form-check form-switch text-${props.mode===('light'||'pink'||'dark')?'red':'light'}`}>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Red</label>
        <input className="form-check-input" type="checkbox" onClick={props.toggleModeRed} role="switch" id="flexSwitchCheckDefault"/>
      </div>
      <div className={`form-check form-switch text-${props.mode===('light'||'red'||'dark')?'pink':'light'}`}>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >pink</label>
        <input className="form-check-input" type="checkbox" onClick={props.toggleModePink} role="switch" id="flexSwitchCheckDefault"/>
      </div> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Toggle Mode</label>
        <input className="form-check-input" type="checkbox"onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
      </div>
    </div>
  </div>
</nav>
</div>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    // isRequired dalne se propTypes undefined nhi hote hai 
    aboutText: PropTypes.string.isRequired,

}

Navbar.defaultProps = {
    title : 'set title here',
    aboutText : 'set about text bere'
}