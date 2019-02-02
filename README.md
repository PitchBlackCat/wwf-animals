# wwf-animals

It's an array of endangered species as listed by [worldwildlife.org](https://www.worldwildlife.org/species/directory)

I combine it with [rgbkrk/adjectives](https://github.com/rgbkrk/adjectives) to create a near infinite list of random names.


## Installation

```
npm install wwf-animals
```

## Usage

```typescript
import * as wwf_animals from "wwf-animals";

console.log(wwf_animals);
console.log(wwf_animals.map(a => a.name));
```

## Project maintenance
Running `py update.py` will update `index.js` with a fresh list of endangered animals.
Running `./deploy.sh` will commit, push and publish