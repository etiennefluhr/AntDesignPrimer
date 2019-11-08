# Ant Design Primer

![Ant Design](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/logo_ant_design.png)

Hach ich komme aus dem Schwärmen für diese geniale React-Komponentenbibliothek einfach nicht mehr heraus. Ant Design bietet eine vollständige Palette an reaktiven Enterprise UI-Komponenten allererster Güte und ermöglicht darüberhinaus die schnelle Realisierung kompletter, moderner und responsiver Web-Frontends ohne dafür eine einzige Zeile HTML oder CSS Code schreiben zu müssen.

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

![The International Chuck Norris Database](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/icndb.png)

Wir wollen uns den praktischen Einsatz von TypeScript und React anhand dieser Bibliothek gemeinsam ansehen und ein minimales Web-Frontend damit erstellen. Als Backend bietet sich die International Chuck Norris Database an, eine simple REST-API die wir mit der JavaScript Fetch API ansprechen können und die uns mit unendlich vielen Chuck Norris Witzen versorgt. Beispielsweise liefert hier ein simpler GET-Request auf http://api.icndb.com/jokes/random einen entsprechenden Response Body im JSON Format zurück, den wir anschließend parsen und in unserem Frontend anzeigen können:
```
{
    "type": "success", 
    "value": { "id": 478, "joke": "Chuck Norris can instantiate an abstract class.", "categories": ["nerdy"] }
}
```
Der gesamte JavaScript Quellcode ist mittels des Transpilers TypeScript in dieser Syntax verfasst und harmoniert hervorragend mit dem React Framework. Außerdem vereint der Tech Stack den Einsatz des Bundlers Webpack und des CSS-Präprozessors Less, mit dessen Hilfe Stylesheet-Angaben sehr gut strukturiert und ohne Redundanzen definiert werden können. Abgerundet wird das Projekt durch Jest - das Testframework für React Komponenten bei dem auch die Code Coverage per Design aus der Tüte fällt. Zudem weist uns der TypeScript Linter TSLint auf Verletzungen unseres festgelegten Coding Styles hin und wir können mit dem npm Paket TypeDoc eine HTML-Dokumentation für all unsere TypeScript-Klassen generieren.

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

--- LOGO Mocha ---

### Run all Tests with Mocha
`npm run test:all`

Invoke the Mocha Test runner to run all defined Tests in TypeScript files under `/src/test` .
The configuration comes as parameters of the command.

--- LOGO Jest ---

### Run all Tests with Jest
`npm run test:jest`

Invoke the Jest Test runner to run all defined Tests in TypeScript files that end with `.test.ts(x)` under `/src/test` .
The Jest configuration resides in `/package.json` in section `jest`.

### Run all Tests with Jest and generate Code Coverage
`npm run test:jest-coverage`

Same as target `test:jest` but Code Coverage is generated in `/coverage`.

<hr>

## Hand Outs


