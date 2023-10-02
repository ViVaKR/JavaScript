# WebPack

```bash
    mkdir webpack-demo
    cd webpack-demo
    npm init -y
    npm install webpack webpack-cli --save-dev
    # 파일 구성...

    npm install --save lodash
    npm run build

    npm install --save-dev style-loader css-loader
```

```bash
 webpack-demo
 |- package.json
 |- package-lock.json
 |- index.html
 |- /src
   |- index.js

```

```js
function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());

```

## index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>

```

package.json

```json
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
  "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2"
   }
 }
```

## project

```bash
webpack-demo
|- package.json
|- package-lock.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
|- /node_modules
```

## [Getting Start! WebPack](<https://webpack.js.org/guides/getting-started/>)

## ETC

```bash
  # mode = 'production': 'none' | 'development' | 'production'
  npx webpack --entry ./src/index.js --output ./dist/main.js --mode=development

```
