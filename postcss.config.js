{{#if mobile}}
const config = require('./config')
{{/if}}

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }){{#if mobile}},
    require('postcss-adaptive')({
      remUnit: config.common.remUnit,
      autoRem: true
    })
    {{/if}}
  ]
}
