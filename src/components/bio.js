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
            Hello!👋🏽 
            My name is Mustafa Hussain. I am a software engineer who spends the
            majority of his time seeking out new, innovative solutions related to the software engineering.
            That being said, I always do my best to develop high-quality backend solutions for my clients.
            In the 7+ years that I have spent as part of the software engineering industry, 
            I have managed to build a lot of stuff that helped me to improve both my collaboration skills and my analytical skills.
            Building highly scalable backend services is something that I am always interested in.
            Apart from being a software engineer, I also like to spend some of my time reading, making coffee and doing a long distance running. 
            I guess you can say that I am a bit of an imposter, but it makes me exactly who I am.
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
