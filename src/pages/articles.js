import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ArticlesPage = ({data}) => {
    return (
        <Layout>
            <SEO title="Articles page" />
            <h1>Latest Articles</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                    <br />
                    <br />
                    <Link to={post.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            ))}
        </Layout>

  )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                    excerpt
                }
            }
        }
    }
`

export default ArticlesPage
