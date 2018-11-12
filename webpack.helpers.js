

/**
 * transform array of paths in webpack entrypoint object
 * @param {array} paths 
 */
module.exports.toObject = (paths) => {
  const ret = {};
  paths.forEach(function(path) {
    ret[path.split('/').slice(-1)[0]] = path;
  });

  return ret;
}

/**
 * function to get all files into dir
 * @param {array} dir path of diretory
 * @return {array} array of string
 */
module.exports.getObjectPaths = (dir) => {
  const glob = require('glob');
  return glob.sync(dir);
}
