# wwf-animals

It's an array of endangered species as listed by [worldwildlife.org](https://www.worldwildlife.org/species/directory)

I've created it because i needed a list of unique random user names.
I combine it with [rgbkrk/adjectives](https://github.com/rgbkrk/adjectives) to create a near infinite list to pick from.

## Update
Running `py update.py` will update `index.js` with a fresh list of endangered animals.
Running `./deploy.sh` will commit, push and publish

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