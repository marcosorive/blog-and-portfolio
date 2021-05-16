module.exports = {
  siteMetadata: {
    title: 'Marcos Orive',
    author: 'Marcos Orive',
    description:
      'A blog and portfolio made. Made with Gatsby. Based on Gatsby paginated blog starter.',
    siteUrl: 'https://marcos.orive.me',
    social: {
      twitter: `marcosorive`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-no-javascript',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
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
        ],
      },
    }
  ],
}
