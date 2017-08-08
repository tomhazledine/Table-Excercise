# Streamlined Starter

A standard Gulp package to drop into any generic web project.

## Installation & Usage

Run `npm install` to set-up the Gulp environment.

1. *Compile SASS*: `gulp sass` takes files from `uncompressed/scss/*.scss` and outputs to `assets/css`.
2. *Compile JS*: `gulp js` takes files from `uncompressed/js/*.js` and outputs to `assets/js`.
3. *Lint JS*: `gulp jslint`
4. *Watch*: The default `gulp` command triggers a task that watches the uncompressed `.js` and `.scss` files for changes, and triggers the appropiate tasks when needed.