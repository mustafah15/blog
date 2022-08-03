import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <div>
            <div style={{
              marginBottom: rhythm(2.5),
            }}
            className="justify-center gap-x-5">

            <p className="leading-loose text-[26px]">
            Hello!👋🏽 
            My name is Mustafa Hussain. 
            <br></br>
            I am a software engineer who spends the majority of his time seeking out new, innovative solutions related to the software engineering.
            That being said, I always do my best to develop high-quality backend solutions for my clients.
            <br></br>
            In the 7+ years that I have spent as part of the software engineering industry, 
            I have managed to build a lot of stuff that helped me to improve both my collaboration skills and my analytical skills.
            Building highly scalable backend services is something that I am always interested in.
            <br></br>
            Apart from being a software engineer, I also like to spend some of my time reading📚, brewing coffee☕️ and doing a long distance running 🏃🏾. 
            </p>
            </div>

            <div className="justify-center gap-x-5" >
              <Link to={`${social.twitter}`} className="uppercase text-[20px]">🐥 twitter </Link>
              <Link to={`${social.github}`} className="uppercase text-[20px]">👨🏾‍💻 github </Link>
            </div>
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
