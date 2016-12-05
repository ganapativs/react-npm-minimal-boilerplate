# Minimal boilerplate for creating React Npm packages with ES2015

The package is based on [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate) package. This one is prepared to be used as a starter point for React components which needs to be published on Npm.

It includes linting with [ESLint](http://eslint.org/).

Also there is of course ES6 transpilation.

## Usage

1. Clone this repo
2. Inside cloned repo run `npm install`
3. If you want to run linting: `npm run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
4. If you want to run transpilation to ES5 in `dist` folder: `npm run prepublish` (standard npm hook).

## Blog post about it:

- [Creating React NPM packages with ES2015](http://julian.io/creating-react-npm-packages-with-es2015/)

## License

MIT
