# SEE-ReactPS

# Clone the repo.

This project uses webpack with node version 5.11.1.
Use `nvm` to switch to node version 5.11.1.
$ nvm use v5.11.1, you may need to install this version of node.

# Install karma and js-server globally.

```
$ npm install -g karma
$ npm install -g karma-cli
$ npm install -g json-server
```
now run `$npm install` to install all node packages necessary for this application.

# Boot up the js-server.

`$json-server --watch db.json`

# Boot up the local webpack-dev-server
! if not install, install the dev server with `$npm install --save webpack-dev-server`

Run `$webpack-dev-server` to load up the test environment

You should see the message `Project is running at http://localhost:8080/` in your termina, by default the webpack-dev-server runs on `http://localhost:8080/` so open up that location in your browser.

1. The first screen you'll see is the Name page, fill out the form to proceed, any missing values will trigger warnings preventing you from advancing.

** For testing purposes, I left a toolbar in `./src/components/app/myApp.js` that can be revealed by changing the value of `includeToolbar` to true. This will simply allow a user to switch pages without having to fill out all of the values for further testing. 

2. Proceed throught the form and fill out all of the required details.

3. On the final page, if all validation has passed, you will be able to post the data from the form to the js-server located at http://localhost:3000/posts/.

4. Close the page, refresh, and switch routes to check for persitence. 

# Testing 

Testing can be initiated by running `$karma start`

