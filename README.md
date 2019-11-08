# Ant Design Primer

Hach ich komme aus dem Schwärmen für diese geniale React-Komponentenbibliothek einfach nicht 
 mehr heraus. Ant Design bietet eine vollständige Palette an reaktiven Enterprise UI-Komponenten
 allererster Güte und ermöglicht darüberhinaus die schnelle Realisierung kompletter, moderner und
 responsiver Web-Frontends ohne dafür eine einzige Zeile HTML oder CSS Code schreiben zu müssen.

![Ant Design](_ASSET/readme/150px/logo_ant_design.png)

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

## The International Chuck Norris Database

Wir wollen uns den praktischen Einsatz von TypeScript und React anhand dieser Bibliothek gemeinsam
 ansehen und ein minimales Web-Frontend damit erstellen. Als Backend bietet sich die International
 Chuck Norris Database an, eine simple REST-API die wir mit der JavaScript Fetch API ansprechen können
 und die uns mit unendlich vielen Chuck Norris Witzen versorgt. Beispielsweise liefert hier ein
 simpler GET-Request auf http://api.icndb.com/jokes/random einen entsprechenden Response Body im 
 JSON Format zurück, den wir anschließend parsen und in unserem Frontend anzeigen können:

![The International Chuck Norris Database](_ASSET/readme/150px/icndb.png)

```
{
    "type": "success", 
    "value": { 
        "id": 478, 
        "joke": "Chuck Norris can instantiate an abstract class.", 
        "categories": ["nerdy"] 
    }
}
```

<hr>

## npm targets

![TypeScript](_ASSET/readme/150px/logo_typescript.png)

### TypeScript nach JavaScript kompilieren
`npm run typescript:compile`

Kompiliert alle TypeScript Quellcodes von `/src` nach JavaScript unter `/bin`.
 Die Einstellungen für den TypeScript Compiler befinden sich unter `/tsconfig.json`.

![Webpack](_ASSET/readme/150px/logo_webpack.png)

### Webpack in development ausführen
`npm run webpack:dev`

Gleiches Verhalten wie Target `typescript:compile`. Darübehinaus werden alle internen
 kompilierten JavaScript Dateien unter `/bin` mit allen externen JavaScript Quellcodes 
 der verwendeten Bibliotheken zusammengefügt und unter `dist/js/bundle.js` vereint.

Nach dem erfolgreichen Abschluss dieses Targets kann das fertige Frontend unter 
 `dist/index.html` betrieben oder deployed werden.

Alle Einstellungen für Webpack siedeln in der `/webpack.config.js` an.

### Webpack in production ausführen
`npm run webpack:production`

Gleiches Verhalten wie das target `webpack:development` nur dass das Kompilat unter
 `dist/js/bundle.js` minifiziert und obfuskiert wird.

### Den Webpack Dev Server starten
`npm run webpack:devserver`

Gleiches Verhalten wie das Target `webpack:development` es wird allerdings kein Output unter
 `bin` oder `dist/js/bundle.js` erstellt. Stattdessen wird die Resource `dist/js/bundle.js`
 virtuell für den Webpack Dev Server zur Verfügung gestellt und der gesamte Ordner `/dist`
 in den Webpack Dev Server gemountet.

Die in den Webpack Dev Server gemountete Frontend Anwendung kann im Browser eingesehen werden
 unter `http://localhost:5000/`

Alle Einstellungen für den Webpack Dev Server befinden sich in der `/webpack.config.js`
 im Abschnitt `config.devServer`.

![TypeDoc](_ASSET/readme/150px/logo_typedoc.png)

### TypeDoc generieren
`npm run typedoc:generate`

Generiert eine HTML Dokumentation unter `/doc` für alle TypeScript Quellcodes unter `/src/typescript`.

![TSLint](_ASSET/readme/150px/logo_tslint.png)

### TSLint ausführen
`npm run tslint:check`

Führt den TypeScript Linter für alle Quellcodes unter `/src` aus.

Einstellungen für den Linter befinden sich unter `/tslint.json`.

![Mocha](_ASSET/readme/150px/logo_mocha.png)

### Alle TypeScript Tests mit Mocha aufrufen
`npm run test:all`

Ruft den Mocha Test Runner auf der alle definierten Tests in TypeScript Dateien unterhalb `/src/test` ausführt.
Die Konfiguration für den Testrunner wird als Parameter im Anschluß an den Befehl definiert.

![Jest](_ASSET/readme/150px/logo_jest.png)

### Alle TypeScript Tests mit Jest aufrufen
`npm run test:jest`

Ruft den Jest Test Runner auf der alle definierten Tests in TypeScript Dateien unterhalb `/src/test` ausführt, 
die über die Endung `.test.ts(x)` verfügen.

Die The Konfiguration befindet sich in der `/package.json` im Abschnitt `jest`.

### Alle TypeScript Tests mit Jest aufrufen und Code Coverage generieren
`npm run test:jest-coverage`

Gleiches Verhalten wie das Target `test:jest` und im Anschluß wird die Code Coverage unter `/coverage` generiert.

<hr>

## Hand Outs

### Warum TypeScript?

https://blog.mayflower.de/6135-typescript.html

### Aufsetzen eines Web-Techstacks mit npm, TypeScript und Webpack

https://blog.mayflower.de/6324-typescript-tooling-npm-webpack.html

### TypeScript im Vergleich zu Java

https://blog.mayflower.de/6344-typeacript-java-entwickler.html

### TypeScript Workshop für Einsteiger

https://blog.mayflower.de/6229-typescript-workshop.html
