
const automl = require('./src/automl')
const apiController = require('./src')

module.exports = (app) => {
  app.post('/predict', automl.predict);
  app.get('/image-search', apiController.renderSearch);
  app.get('/', apiController.renderHome);
}
