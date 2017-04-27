# Modern and Minimal Electron + React Starter Kit
_Electron, React, Webpack -- Modern and up-to-date, with a handful of quality of life features included_

I made this starter kit as most boilerplates were either out-of-date, heavy handed, or enforced a structure on me that I just didnt like.
With a very select assortment of modules, this starter kit is designed to get you up and running very quickly, and to let you easily drop in your own structure and tools on top of it.
The basic structure of `src/` is intentionally minimal to make it easier to allow you to put your own twist on how you like things laid out.

Production builds do NOT use UglifyJS, instead Babili is used and NO ES2015/ES6 transpilation is provided -- As modern node and chromium versions support 99%+ of the ES6 feature set, I feel those steps are unnecessary.

### Extra feature
* React DevTools
* Yarn support
* StandardJS code style

### To get started:
* Run `yarn`

##### Development
* Run `yarn run dev` to start webpack dev server
* In another terminal window run `yarn run testDev` to start electron

##### Production
_You have two options, an automatic build or two manual steps_

###### One Shot
* Run `yarn run package` to have webpack compile your application into `dist/bundle.js` and `dist/index.html`, and then an electron-packager run will be triggered for the current platform/arch, outputting to `builds/`

###### Manual
_Recommendation: Update the "postpackage" script call in package.json to specify parameters as you choose and use the `yarn run package` command instead of running these steps manually_
* Run `yarn run build` to have webpack compile and output your bundle to `dist/bundle.js`
* Then you can call electron-packager directly with any commands you choose

If you want to test the production build (In case you think Babili might be breaking something) after running `yarn run build` you can then call `yarn run testProd`. This will cause electron to load off of the `dist/` build instead of looking for the webpack-dev-server instance.
