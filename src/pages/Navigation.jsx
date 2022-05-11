import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Navigation = () => {
  return (
    <div className='App'>
      <Link to='/'><Header /></Link> 
      <div className='page'>
        
      </div>        
    </div>
  )
}

export default Navigation