var plugins = [{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-plugin-react-helmet-async/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-remark-images","id":"e5408ee6-73b9-53ed-8611-ce95bf1d97b5","name":"gatsby-remark-images","version":"3.1.44","pluginOptions":{"plugins":[],"maxWidth":750},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":750}},{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"noopener noreferrer"}},{"resolve":"gatsby-remark-static-images"}],"remarkPlugins":[null],"rehypePlugins":[null]},
    },{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-plugin-favicons/gatsby-ssr'),
      options: {"plugins":[],"logo":"/home/xbtwo/prod/buy-mycrypto/src/assets/images/logo.svg","title":"MyCrypto Knowledge Base","background":"#1d334f","icons":{"appleStartup":{"offset":20}}},
    },{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/node_modules/gatsby-plugin-matomo/gatsby-ssr'),
      options: {"plugins":[],"siteId":"3","matomoUrl":"https://analytics.mycryptoapi.com","siteUrl":"https://buy.mycrypto.com/","disableCookies":true},
    },{
      plugin: require('/home/xbtwo/prod/buy-mycrypto/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
