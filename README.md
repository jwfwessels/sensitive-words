#Sensitive-words

# Example
## yarn 

```shell
$ yarn add sensitive-words
```
## npm

```shell
$ npm install sensitive-words --save
```

```javascript
const { sensitiveWords } = require('sensitive-words')
// ES2015 modules
import { sensitiveWords } from  'sensitive-words'


const filtered = sensitiveWords(
	'The new apple macbook pro will have a touchbar',
	['pro', 'touchbar']
	);

console.log(filtered);
// 'The new apple macbook ***** will have a *****'
```