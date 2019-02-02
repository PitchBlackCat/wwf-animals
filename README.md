# wwf-animals

It's an array of endangered species as listed by [worldwildlife.org](https://www.worldwildlife.org/species/directory)

## Installation

```
npm install wwf-animals
```

## Usage

```typescript
import * as endangered_animals from "wwf-animals";

console.log(endangered_animals);
```

I use it in conjunction with [rgbkrk/adjectives](https://github.com/rgbkrk/adjectives) to create a near infinite list of random names.

## Example Output

```typescript
[
    {name: "African Elephant", scientific: "Loxodonta africana", status: "Vulnerable"},
    {name: "Bengal Tiger", scientific: "Panthera tigris tigris", status: "Endangered"},
    {name: "Orangutan", scientific: "Pongo abelii, Pongo pygmaeus", status: "Critically Endangered"},
    // ...
]
```

## Project maintenance
Running `py update.py` will update `index.js` with a fresh list of endangered animals.
Running `./deploy.sh` will commit, push and publish