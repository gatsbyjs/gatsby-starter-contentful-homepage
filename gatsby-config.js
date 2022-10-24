// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `LoArt & Dev Portfolio`,
    author: {
      name: `Simón López`,
      summary: `Web Developer & Designer, 3D Artist, Game Developer.`,
    },
    description: `Personal portfolio of Simón López.`,
    siteUrl: 'https://loart.dev',
    social: {
      twitter: `LoArtDev`,
      github: `SimonLopezJara`,
      instagram: `loart_dev`,
      artstation: `loartdev`,
      facebook: `loartdev `,
      itch: `loartdev`,
    },

  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`es`, `en`],
        // language file path
        defaultLanguage: `es`,
        // option to redirect to `/es` when connecting `/`
        redirect: true,
        redirectDefaultLanguageToRoot: true,
        fallbackLanguage: `en`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://loart.dev',
        sitemap: 'https://loart.dev/sitemap.xml',
      }
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        storageKey: 'darkMode',
        minify: true,
      },
    },
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
