process.env.GOOGLE_APPLICATION_CREDENTIALS = `${__dirname}/config.json`;

const cluster = require('cluster');

const initServer = () => {
  const express = require('express')
  const nunjucks = require('nunjucks');
  const bodyParser = require('body-parser')

  const app = express()
  const routes = require('./routes')
  const port = 5000

  nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    path: 'views'
  });

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/static', express.static(`${__dirname}/dist`))

  routes(app);

  app.listen(port);
  console.log(`Program running on port ${port}`);
}

if (cluster.isMaster) {
  let cpuCount = require('os').cpus().length;

  while(cpuCount--) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log('Worker %d died :(', worker.id);
    cluster.fork();
  })

} else {
  initServer();
}