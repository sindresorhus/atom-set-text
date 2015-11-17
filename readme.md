# atom-set-text [![Build Status](https://travis-ci.org/sindresorhus/atom-set-text.svg?branch=master)](https://travis-ci.org/sindresorhus/atom-set-text)

> A better Atom [`TextEditor#setText()`](https://atom.io/docs/api/latest/TextEditor#instance-setText) that preserves cursor and scroll position


## Install

```
$ npm install --save atom-set-text
```


## Usage

```js
/** @babel */
import atom from 'atom';
import setText from 'atom-set-text';

const editor = atom.workspace.getActiveTextEditor();

setText(atom, editor, 'new text');
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
