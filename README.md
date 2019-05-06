# pHTML Eleventy [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][pHTML]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Eleventy] lets you use [pHTML] to process HTML files in [Eleventy].

## Installation

Available on [npm][npm-url].

```bash
npm install @phtml/11ty --save-dev
```

Open up your Eleventy config file (probably `.eleventy.js`) and use `addPlugin`:

```js
const phtml11ty = require('@phtml/11ty');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty);
};
```

### Options

Optionally pass in an options object as the second argument to `addPlugin` to
further customize this plugin pack.

```js
const phtml11ty = require('@phtml/11ty');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    // {Array|Object|Plugin} plugin or plugins to be used by pthml
    use,

    // {Boolean} whether relative paths should reference the source or output path
    useInputPath
  });
};
```

### Example

```js
const phtml11ty = require('@phtml/11ty');
const phtmlDoctype = require('@phtml/doctype');
const phtmlSelfClosing = require('@phtml/doctype');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    // prepend <!doctype html> when a html, head, or body tag is present
    use: phtmlDoctype({ safe: true })
  });
};
```

### Example with Multiple Plugins

The following example uses the
[Doctype](https://github.com/phtmlorg/phtml-doctype),
[Self-Closing](https://github.com/phtmlorg/phtml-self-closing), and
[Template](https://github.com/phtmlorg/phtml-template),

```js
const phtml11ty = require('@phtml/11ty');
const phtmlDoctype = require('@phtml/doctype');
const phtmlSelfClosing = require('@phtml/self-closing');
const phtmlTemplate = require('@phtml/template');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      // prepend <!doctype html> when a html, head, or body tag is present
      phtmlDoctype({ safe: true }),
      // unwrap <self-closing /> tags
      phtmlSelfClosing(),
      // pre-compiled templates using <is:template name="tmpl" /> & <as:template name="tmpl" />
      phtmlTemplate()
    ]
  });
};
```

### Example with Transform Function

The `use` option accepts an object with a `transformFunction` function for
accessing template configuration during plugin initialization.

```js
const phtml11ty = require('@phtml/11ty');
const phtmlJsx = require('@phtml/jsx');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: {
      transformFunction (template) {
        // support JSX in HTML
        return phtmlJsx({ data: template.dataCache });
      }
  });
};
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-11ty.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-11ty
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/11ty.svg
[npm-url]: https://www.npmjs.com/package/@phtml/11ty

[Eleventy]: https://github.com/11ty/eleventy
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
