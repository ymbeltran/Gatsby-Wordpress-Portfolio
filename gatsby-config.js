/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

  /* Your site config here */

  module.exports = {
    pathPrefix: `/devyess`,
    plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-offline`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Gatsby Simplefolio`,
          short_name: `Simplefolio`,
          start_url: `/`,
          background_color: `#fff`,
          theme_color: `#02aab0`,
          display: `standalone`,
          icon: 'src/images/favicon.png',
        },
      },
      {
        resolve: `gatsby-source-wordpress`,
        options: {
            url:
            process.env.WPGRAPHQL_URL ||
            `https://yesse.co/graphql`,
            // Specify the URL of the WordPress source
            /* baseUrl: `localhost:8888/wordpress`,
            protocol: `http`, */
            // Indicates if a site is hosted on WordPress.com
            // hostingWPCOM: false,
            // Specify which URL structures to fetch
            
        },
    },
    ],
  };