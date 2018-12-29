import React from 'react'
import { Link } from 'gatsby'

/* This is the navigation bar for the app, with links to top level sections. */
const Nav = () => {
    return (
        <div style={{
            background: '#f3f3f3',
            paddingTop: '10px'
        }}>
            <div style={{
                margin: `0 auto`,
                maxWidth: 960,
                paddingTop: `0.6rem`
            }}>
                <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
            </div>
        </div>
  )
}

export default Nav
