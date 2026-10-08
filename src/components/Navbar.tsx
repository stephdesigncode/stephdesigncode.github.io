import React from 'react';
import { Link } from 'react-router-dom';
import './component.css';

const Navbar = () => {
  return (
    <nav className="navbar w-3/5 mx-auto px-4">
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/OurStory">Our Story</Link></li>
            <li><Link to="/Travel">Travel</Link></li>
            <li><Link to="/ThingsToDo">Things to Do</Link></li>
            <li><Link to="/FAQ">Q + A</Link></li>
            <li><Link to="/Registry">Registry</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar