import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle} location={location}>
      <h1 className="text-[24px]">{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
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
                      to={slug}
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
            </li>
          )
        })}
      </ul>
      <Link
        to="/tags"
        className="mt-5 inline-block underline underline-offset-8"
      >
        All tags
      </Link>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            time
          }
        }
      }
    }
  }
`
