import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* This is the about page. */
const AboutPage = () => {
    return (
        <Layout>
            <SEO title="Page two" />
            <h1>About</h1>
            <p>Built by Full Stack Developer Jonathan Leack, Emergent Motion is a website that will showcase the power of Gatsby.js, React, and GraphQL. Here you will find physical therapy health information to help you live better.</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>

  )
}

export default AboutPage
