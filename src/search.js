'use strict';

module.exports = (() => {
  const render = async (request, reply) => {
    reply.render('./index.html');
  }

  return {
    render
  }
})()
