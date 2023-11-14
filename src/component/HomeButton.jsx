import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomeButton.css'
import {FaArrowLeft} from 'react-icons/fa'

export default function HomeButton() {
  return (
    <div className='back-btn'>
    <Link to="/"><FaArrowLeft style={{color:'black'}}/></Link>
    </div>
  )
}
