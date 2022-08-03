import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NewsLetter from '../components/newsLetter'
import Bio from '../components/bio'
import { Link } from 'gatsby'

class AboutMePage extends React.Component {
  render() {
    return (
      
      <Layout location={this.props.location}>
        <SEO title="About Me; Mustafa Hussain" />
          <h1 className="text-[60px] font-extrabold">About Me</h1>
          <div className="h-[2px] w-[200px] bg-gray-200" style={{ marginBottom: '20px'}}>
          </div>
          <Bio />

        <NewsLetter />
      </Layout>
    )
  }
}

export default AboutMePage
