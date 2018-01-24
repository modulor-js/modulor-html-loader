module.exports = function(source) {
  const options = Object.assign({
    variable: 'scope'
  }, this.query || {});

  return `
    import { html, stopNode, render } from '@modulor-js/html';
    module.exports = (${options.variable}, $container) => html\`${source}\`.render($container);
  `;
};
