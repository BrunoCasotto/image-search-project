
const automl = require('./src/autoMl')
const search = require('./src/search')

module.exports = (app) => {
  app.post('/predict', automl.predict);
  app.get('/search-image', search.render);
}