import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <section className="navbar">
        <div className="logo-container">
        <Link to="/"><h1 className='logo'>Movie Mate</h1></Link>
        </div>
    </section>
  )
}
