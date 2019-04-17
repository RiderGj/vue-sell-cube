const path = require('path')
const data = require('./data.json')
const seller = data.seller
const goods = data.goods
const ratings = data.ratings

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('scr/common'))
  }
}
