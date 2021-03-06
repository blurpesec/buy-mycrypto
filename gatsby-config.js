const path = require("path");

module.exports = {
  siteMetadata: {
    title: "MyCrypto | Buy ETH Instantly",
    description:
      "Buy Ether, Dai, and other Ethereum-blockchain assets while supporting MyCrypto",
    siteUrl: "https://buy.mycrypto.com",
    baseUrl: "https://buy.mycrypto.com"
  },
  // Used for deployment to gh-pages
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "CategoryData"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.resolve(__dirname, "src/assets/images"),
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-favicons",
      options: {
        logo: path.resolve(__dirname, "src/assets/images/logo.svg"),
        title: "MyCrypto | Buy Crypto Assets",
        background: "#1d334f",
        icons: {
          appleStartup: {
            offset: 20
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "3",
        matomoUrl: "https://analytics.mycryptoapi.com",
        siteUrl: "https://buy.mycrypto.com/",
        disableCookies: true
      }
    }
  ]
};
