import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import NewsLetter from '../components/newsLetter'

import { rhythm, scale } from '../utils/typography'

const GITHUB_USERNAME = 'mustafah15'
const GITHUB_REPO_NAME = 'blog'

class BlogPostTemplate extends React.Component {
  render() {
    const slug = this.props.pageContext.slug
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/content/blog${slug}index.md`;

    return (
        <Layout  location={this.props.location} title={siteTitle}>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: 'block',
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date} {', ☕️ '} {post.frontmatter.time} {' min read'} 
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <a href={editUrl} target="_blank" rel="noopener noreferrer">
            Edit on GitHub
          </a>
          
          <hr
            style={{
              color: 'green',
              display: 'block',
              height: '1px',
              borderTop: '1px solid #888888',
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          />
          
          <NewsLetter />
          <Bio />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {
                previous &&
                <Link to={previous.fields.slug} rel="prev">
                  ⬅️ {previous.frontmatter.title}
                </Link>
              }
            </li>
            <li>
              {
                next &&
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} ➡️
                </Link>
              }
            </li>
          </ul>
          <div async data-uid="4b025950f8" src="https://fabulous-trader-9105.ck.page/4b025950f8/index.js">
          </div>
        </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        time
      }
    }
  }
`
