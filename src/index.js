'use strict';

module.exports = (() => {
  const renderSearch = async (request, reply) => {
    reply.render('./pages/search.html');
  }

  const renderHome = async (request, reply) => {
    reply.render('./pages/home.html');
  }

  return {
    renderSearch,
    renderHome
  }
})()
