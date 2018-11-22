# image search project
Um projeto de uma câmera [mobile] html que utiliza o machine learning do google para identificar imagens e criar query strings baseando-se nas labels configuradas no google automl (https://cloud.google.com/automl/).

## stack
* Vue js
* Sass
* Hapi js
* Webpack
* Nunjucks

## Development mode
```
$ git clone git@github.com:BrunoCasotto/image-search-project.git
$ cd image-search-project
$ npm install
$ npm run watch [1 tab]
$ nodemon [2 tab]
```

Criar um arquivo config.json na raiz do projeto com as private keys do google automl.

## To minify files
```
$ npm run build:prod
```

## see the live
https://image-search-project.herokuapp.com/ - abra preferencialmente na versão mobile.