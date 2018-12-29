import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* This section will describe and list services offered by the company. */
const ServicesPage = () => {
    return (
        <Layout>
            <SEO title="Services page" />
            <h1>Services</h1>
            <p>Life is too short to live with pain. All you want is a solution. We have one.</p>
            <ul>
                <li>Running</li>
                <li>Dance</li>
                <li>Gymnastics</li>
                <li>Fitness and Wellness</li>
                <li>Orthopedics</li>
            </ul>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
  )
}

export default ServicesPage
