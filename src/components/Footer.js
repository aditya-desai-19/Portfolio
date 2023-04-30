import React from 'react'
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <button><GitHub /></button>
            <button><Instagram /></button>
            <button><LinkedIn /></button>
            <button><Twitter /></button>
        </div>
        <p>Copyright &copy; 2023</p>
    </div>
  )
}

export default Footer