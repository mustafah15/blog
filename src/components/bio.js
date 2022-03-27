import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
            className="flex items-center gap-x-5"
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 250,
                borderRadius: '100%',
              }}
            />
            <p className="leading-loose text-[26px]">
              Personal blog by{' '}

                    <Link
                      style={{
                        boxShadow: 'none',
                        color: '#1479b8',
                      }}
                      to={`https://twitter.com/${social.twitter}`}
                    >
                      {author}
                    </Link>
              
              . I share what I am learning about Software Engineering, Productivity,
              on my{' '}
              <a
                href={
                  'https://www.youtube.com/channel/UC_57Z3KC1RzGRJMBYZGJYtA'
                }
              >
                Youtube channel
              </a>{' '}
              and blog. Feel free to join my newsletter to follow along.
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Bio
