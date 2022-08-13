module.exports = {
  siteMetadata: {
    title: 'Developer Stories',
    author: 'Mustafa Hussain',
    description:
      'Personal blog by Mustafa Hussain. \n I share what I learned about software engineering, productivity, and building new habits on my Youtube channel and blog. Feel free to join my newsletter to follow along.',
    siteUrl: 'https://mhussain.net',
    social: {
      github: 'https://github.com/mustafah15',
      twitter: 'https://twitter.com/_mustafah15',
      youtube: 'https://www.youtube.com/channel/UC_57Z3KC1RzGRJMBYZGJYtA',
      email: 'mustafa.hussain93@gmail.com',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-48540732-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mustafa Hussain's blog`,
        short_name: `mhussain.net`,
        start_url: `/`,
        background_color: `#282c35`,
        theme_color: `#1677be`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
      
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-postcss`,
  ],
}
