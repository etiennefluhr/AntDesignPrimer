# Ant Design Primer

--- LOGO Ant Design ---

## Tech Stack
- TypeScript 3.4.5
- Ant Design 3.1
- Webpack 4.40
- React 16.2
- JavaScript Fetch API
- Less 3.9
- Jest 24.9
- TypeDoc 0.14
- TSLint 5.16

<hr>


## Ant Design meets the International Chuck Norris Database

--- LOGO Chuck Norris ---

This ..

<hr>

## Primal npm targets

--- LOGO TYPESCRIPT ---

### Compile TypeScript to JavaScript
`npm run typescript:compile`

Compiles all TypeScript sources from `/src` to JavaScript unter `/bin`.
All TypeScript compiler settings reside in `/tsconfig.json`.

--- LOGO WEBPACK ---

### Run Webpack in development mode
`npm run webpack:dev`

Compiles all TypeScript sources from `/src` to JavaScript under `/bin` and bundles these internal sources together with all external library sources to `dist/js/bundle.js`.
All Webpack bundler settings reside in `/webpack.config.js`.

### Run Webpack in production mode
`npm run webpack:production`

Same as target `webpack:development` but compilation in `dist/js/bundle.js` is minified and obfuscated.

### Run the Webpack Dev Server
`npm run webpack:devserver`

Same as target `webpack:development` but no output to `bin` or `dist/js/bundle.js` occurs on disk.
Instead, the resource `dist/js/bundle.js` is served virtually and the folder `/dist` is mounted in the Webpack Dev Server.

All Webpack Dev Server settings reside in `/webpack.config.js` in section `config.devServer`.

Find the created site in your browser on
```
http://localhost:5000/
```

--- LOGO TypeDoc ---

### Generate TypeDoc
`npm run typedoc:generate`

Generates a HTML documentation at `/doc` for all TypeScript sources under `/src/typescript`.

--- LOGO TSLint ---

### Run TSLint
`npm run tslint:check`

Runs the TypeScript Linter on all TypeScript sources under `/src`.
Linter Settings reside in `/tslint.json`.







## Hand Outs


