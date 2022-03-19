import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import NewsLetter from '../components/newsLetter'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All Posts"
          keywords={[
            'blog',
            'hussain',
            'mustafa',
            'tech',
            'mustafah15',
            'mhussain.net',
            'backend',
            'development',
            'software',
            'engineer',
          ]}
        />
        <Bio />
        <div className="flex flex-col gap-y-16">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <div className="flex items-center">
                  <div className="max-w-[200px] w-full flex flex-col gap-1.5">
                    <div>{node.frontmatter.date}</div>
                    <div>{`☕ ${node.frontmatter.time} min read`}</div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-extrabold mb-3.5">
                      <Link
                        style={{
                          boxShadow: 'none',
                          color: 'var(--textNormal)',
                        }}
                        to={node.fields.slug}
                      >
                        {title}
                      </Link>
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      style={{ color: '#757575' }}
                      className="leading-loose"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <hr
          style={{
            color: 'green',
            display: 'block',
            height: '1px',
            borderTop: '1px solid #888888',
            marginTop: rhythm(1),
            marginBottom: rhythm(2),
          }}
        />
        <NewsLetter />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            time
          }
        }
      }
    }
  }
`
