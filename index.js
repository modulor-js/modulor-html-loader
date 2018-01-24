module.exports = function(source) {
  const options = Object.assign({
    variable: 'scope'
  }, this.query || {});

  return `
    const { html, stopNode, render } = require('@modulor-js/html');

    module.exports = (${options.variable}, $container) => html\`${source}\`.render($container);
  `;
};
