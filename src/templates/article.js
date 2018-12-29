import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

/* Define the template for an article. */
export default function Template({ data }) {
  const article = data.markdownRemark

  return (
    <Layout>
      <SEO title="Physical Therapy health article" />
      <h1>{article.frontmatter.title}</h1>
      <h4>
        Written by {article.frontmatter.author} on {article.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </Layout>
  )
}

export const articleQuery = graphql`
  query ArticleByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
