# gulp-axe-core [![Build Status](https://travis-ci.org/felixzapata/gulp-axe-core.svg?branch=master)](https://travis-ci.org/felixzapata/gulp-axe-core)

> Gulp plugin to use [axe-core](https://github.com/dequelabs/axe-core)


## Work in progress.


## Install

```
$ npm install --save-dev gulp-axe-core
```


## Usage

```js
var gulp = require('gulp');
var axeCore = require('gulp-axe-core');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(axeCore());
});
```

## License

MIT © [Felix Zapata](http://github.com/felixzapata)
