import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
  return (
      <div style={{
          background: '#f3f3f3',
          paddingTop: '10px'
      }}>
          <ul style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-evenly'
          }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/">Coming Soon</Link></li>
          </ul>
      
    </div>
  )
}

export default Menu