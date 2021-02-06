import React from 'react'
import {Link} from 'react-router-dom'

const Navbar  = () => {
    return (
        <nav className="nav-wrapper white">
            <div className="container">
            <Link to="/home" className="brand-logo left black-text"><span className="black-text" to="/home">ToDo's</span></Link>
                <ul className='right black-text'>
                    <li><Link  to="/home">Home</Link> </li>
                    <li><Link to="/TodoApp">Todo</Link> </li>
                    <li><Link to="/About">About me</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar