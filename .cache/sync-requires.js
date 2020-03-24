const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/xbtwo/prod/buy-mycrypto/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/home/xbtwo/prod/buy-mycrypto/src/pages/404.tsx"))),
  "component---src-pages-contact-us-tsx": hot(preferDefault(require("/home/xbtwo/prod/buy-mycrypto/src/pages/contact-us.tsx"))),
  "component---src-pages-contact-us-error-tsx": hot(preferDefault(require("/home/xbtwo/prod/buy-mycrypto/src/pages/contact-us/error.tsx"))),
  "component---src-pages-contact-us-success-tsx": hot(preferDefault(require("/home/xbtwo/prod/buy-mycrypto/src/pages/contact-us/success.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/xbtwo/prod/buy-mycrypto/src/pages/index.tsx")))
}

