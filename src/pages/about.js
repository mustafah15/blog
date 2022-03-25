import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import NewsLetter from '../components/newsLetter'
import Bio from '../components/bio'

class AboutMePage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About Me; Mustafa Hussain" />
        <Bio />
  
        <NewsLetter />
      </Layout>
    )
  }
}

export default AboutMePage
