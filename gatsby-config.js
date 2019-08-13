module.exports = {
  siteMetadata: {
    title: 'Marcos Orive',
    author: 'Marcos Orive',
    description:
      'A blog and portfolio made. Made with Gatsby. Based on Gatsby paginated blog starter.',
    siteUrl: 'https://moriveblogandportfolio.netlify.com/',
    social: {
      twitter: `marcosorive`,
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/images`,
        name: `images`,
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marcos Orive: blog and portfolio.`,
        short_name: `MarcosOrive`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#45b649`,
        display: `minimal-ui`,
        icon: `images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-plugin-transition-link`
  ],
}
