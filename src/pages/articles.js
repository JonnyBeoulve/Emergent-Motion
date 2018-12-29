import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* This section lists articles. */
const ArticlesPage = ({data}) => {
    return (
        <Layout>
            <SEO title="Articles page" />
            <h1>Latest Articles</h1>
            {data.allMarkdownRemark.edges.map(article => (
                <div key={article.node.id}>
                    <h3>{article.node.frontmatter.title}</h3>
                    <small>Article written by {article.node.frontmatter.author} on {article.node.frontmatter.date}</small>
                    <br />
                    <br />
                    <Link to={article.node.frontmatter.path}>Read More</Link>
                    <br />
                    <br />
                    <hr />
                </div>
            ))}
        </Layout>

  )
}

/* Query for all articles in markdown folder. */
export const pageQuery = graphql`
    query ArticleIndexQuery {
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
