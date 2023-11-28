# FSD 74

## How to run the project

### Install missing modules
```bash
npm install
```

This command installs all the modules listed in the `package.json`

#### Install a new module
```bash
npm install myModule
```

### Make sure the .env file is present

The `.env` file contains sensitive information like authentification credentials for MongoDB

The `.env` must be placed in the project root folder.

### Run the dev script
```bash
npm run dev
```

If the script is not defined, you must add it into the `package.json`
```json
{
  [...],

  "scripts": {
    "dev": "nodemon"
  },

  [...]
}
```

Also, make sure the `main` property points to the correct file, Ex:
```json
{
  [...],

  "main": "src/index.js",

  [...]
}
```

#### Install nodemon
```bash
npm install -G nodemon
```

This installes the nodemon package globally. It can be used outside the project.

**If you cannot install and use nodemon globally** you can install it the project
```bash
npm install nodemon --dev
```

The `--dev` flag indicates that this package is necessary only for the project's development.

If you installed `nodemon` locally you need to change the `"dev"` script like this:
```json
{
  [...],

  "scripts": {
    "dev": "npx nodemon"
  },

  [...]
}
```
