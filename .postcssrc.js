// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
      remove :false
    },
    "postcss-px2rem":{
      remUnit: 75
    }
  }
}
