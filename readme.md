
# Create a WEB SERVER

### Installing
* npm init
* yarn add express
* yarn add ejs

### Install

* NODE
* NPM
* YARN
* EXPRESS
* CHAI
* MOCHA
* SINON
* EJS

## Add independence
* yarn add mocha --dev
* yarn add chai --dev
* yarn add sinon --dev

### Command on the terminal:
* node index.js
* npm start
* node run test2
* npm test

## Observações - Sobre o comando de Testes:
````
Se estiver utilizando o Windows, rodar o teste executando da seguinte forma: node_modules\.bin\mocha --reporter spec **/*.test.js
e ao adicionar no package.json, ficará dessa forma: 
"test": "node_modules\\.bin\\mocha --reporter spec **/*.test.js"

Outra forma de uso em ambientes Windows é:
"test": "./node_modules/.bin/mocha \"./{,!(node_modules)/**/}*.test.js\""​

Usuários Linux podem executar desta forma:
./node_modules/.bin/mocha --reporter spec **/*.test.js​
````