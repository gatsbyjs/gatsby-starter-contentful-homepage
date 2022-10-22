// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://loart.dev",
    title: "LoArt & Dev | Portfolio",
    author: `Simón López Jaramillo | LoArt & Dev`,
    description: "Simon's portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "LoArt & Dev",
        short_name: "LoArtDev",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#181818",
        theme_color: "#8758FF",
        icon: "src/favicon.png",
      },
    },
  ],
}
