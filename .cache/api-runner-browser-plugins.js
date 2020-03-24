module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-react-helmet-async/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-remark-images","id":"e5408ee6-73b9-53ed-8611-ce95bf1d97b5","name":"gatsby-remark-images","version":"3.1.44","pluginOptions":{"plugins":[],"maxWidth":750},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":750}},{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"noopener noreferrer"}},{"resolve":"gatsby-remark-static-images"}],"remarkPlugins":[null],"rehypePlugins":[null]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750},
    },{
      plugin: require('../node_modules/gatsby-plugin-matomo/gatsby-browser.js'),
      options: {"plugins":[],"siteId":"3","matomoUrl":"https://analytics.mycryptoapi.com","siteUrl":"https://buy.mycrypto.com/","disableCookies":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
