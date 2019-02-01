# wwf-animals

It's an array of endangered species as listed by [worldwildlife.org](https://www.worldwildlife.org/species/directory)

## Installation

```
npm install wwf-animals
```

## Usage

```javascript
var animals = require('wwf-animals');
console.log(animals);
console.log(animals.map(a => a.name));
```