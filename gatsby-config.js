require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Digital Central Starter`,
    description: `Kick off a Gatsby project with this Digital Central starter, ships with best packages to get started fast.`,
    author: `@michaelserres`,
    siteUrl: `https://digitalcentralstarter.gatsbyjs.io`,
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: "gatsby-source-graphcms",
    //   options: {
    //     endpoint: process.env.GATSBY_GRAPHCMS_ENDPOINT,
    //     // buildMarkdownNodes: true,
    //     // downloadLocalImages: true,
    //     stages: ["PUBLISHED"],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [process.env.GATSBY_GTM_ID],
    //     gtagConfig: {
    //       // optimize_id: process.env.GATSBY_OPTIMIZE_ID,
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       head: true,
    //       respectDNT: true,
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `digital-central-starter`,
        short_name: `DC Starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://axieinfinity-companion.com`,
    //   },
    // },
  ],
}
