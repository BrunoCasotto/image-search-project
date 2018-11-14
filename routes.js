
const automl = require('./src/automl')
const search = require('./src/search')

module.exports = (app) => {
  app.post('/predict', automl.predict);
  app.get('/search-image', search.render);
}
