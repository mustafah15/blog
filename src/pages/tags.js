import { graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import React from 'react'
import Layout from '../components/layout'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout title={title} location={location}>
    <div className="flex justify-center mt-14">
      <div className="flex gap-10">
        <h1 className="text-[60px] font-extrabold">Tags</h1>
        <div className="h-[100px] w-[2px] bg-gray-200" />
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '2rem' }}>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="uppercase text-[18px]"
              >
                <span className="text-[#14b8a6] mr-1.5">{tag.fieldValue}</span>
                {`(${tag.totalCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
