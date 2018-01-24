# modulor-html-loader
[modulor-html](https://github.com/modulor-js/modulor-html) loader for webpack

turns

```html
<span>${scope.value}</span>
```

into

```js
const { html, stopNode, render } = require('@modulor-js/html');
module.exports = (scope, $container) => html`
  <span>${scope.value}</span>
`.render($container);
`
```

## Usage

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.modulor.html?$/,  //can be any extension here
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@modulor-js/html-loader'
          },
        ]
      },
      ...
    ],
  },
  ...
};
```

### Usage with jest

create file transformer:

```js
const modulorHtmlLoader = require('@modulor-js/html-loader');

module.exports = {
  process(src, filename, config, options){
    return modulorHtmlLoader.call({
      query: {
        variable: 'scope'
      }
    }, src);
  }
};
```

then use it in jest config

```js
//in package.json
...
jest: {
  ...
  "transform": {
    "^.+\\.modulor.html$": "<rootDir>/path/to/your/transformer.js",
  },
  ...
}
...
```

### Options

**variable**: scope variable name (default `scope`)
