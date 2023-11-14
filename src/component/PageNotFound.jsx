import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageNotFound.css'

export default function PageNotFound() {
  return (
    <div className='page-not-found-container'>
        <div className='center'>
        <h2 className='page-not-found-title'>Whoops... Page Not Found</h2>
        <Link to="/">
        <button
          type="button" className='btn'> Back To Home
        </button>
      </Link>
      </div>
    </div>
  )
}