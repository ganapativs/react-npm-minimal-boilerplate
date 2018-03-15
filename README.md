# Minimal boilerplate for creating React NPM packages
Boilerplate to get started with react NPM package instantly.

## Features
- ES6, ES7, ES8 support
- [Class properties support](https://github.com/tc39/proposal-class-fields)
- Decorators support
- [ESLint](http://eslint.org/) with [AirBnB style guide](https://www.npmjs.com/package/eslint-config-airbnb) & [Prettier](https://github.com/prettier/prettier)
- Transpilation to ES5

## Usage
1. Clone the repo: `git clone https://github.com/ganapativs/react-npm-minimal-boilerplate.git my-awesome-react-npm-package && cd $_`
2. Remove .git: `rm -rf .git`
3. Install dependencies: `yarn`
4. Lint: `yarn run lint`
5. Fix lint issues and prettify code 😎: `yarn run lint-fix`
6. Transpilation to ES5 in `dist` folder: `yarn run prepublish` (standard npm hook)
7. [Push package to your own Github repository](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
8. Publish package: `yarn run publish`

## Licenses
MIT
