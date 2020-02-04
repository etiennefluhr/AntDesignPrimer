
# Ant Design<br>Web-Frontend Workshop

![Ant Design](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_ant_design.png)

In diesem Workshop wollen wir die Komponentenbibliothek Ant Design im praktischen Einsatz kennenlernen. Die geniale 
 React-Komponentenbibliothek Ant Design bietet eine vollständige Palette an hochwertigen, responsiven und
 reaktiven Enterprise UI-Komponenten für Web-Frontends. Darüberhinaus ermöglicht sie die schnelle Realisierung 
 kompletter Webpräsenzen ohne dafür eine einzige Zeile HTML oder CSS Code schreiben zu müssen.

## npm TechStack

![npm](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_npm.png)


Wir erstellen damit ein minimales Web-Frontend, das mit den Technlogien TypeScript, Webpack und React realisiert wird
 und hierfür einen modernen npm-TechStack mit zahlreichen Zusatztools (Tests, Linter usw.) breitstellt.
 Die Requests zum Backend erfolgen über die integrierte JavaScript Fetch API.

## Tech Stack
- Ant Design 3.1
- TypeScript 3.4.5
- Webpack 4.40
- React 16.2
- JavaScript Fetch API
- Less 3.9
- Jest 24.9
- TypeDoc 0.14
- ESLint 6.8.0
- TSLint 5.16

![The International Chuck Norris Database](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/icndb.png)

## Web-Backend:<br>The International Chuck Norris Database

Als bestehendes Backend für unser Frontend-Projekt bietet sich die **International
 Chuck Norris Database** an, eine simple REST-API die wir mit der JavaScript Fetch API ansprechen können
 und die uns mit unendlich vielen Chuck Norris Witzen versorgt. Beispielsweise liefert hier ein
 simpler GET-Request auf http://api.icndb.com/jokes/random einen entsprechenden Response Body im 
 JSON Format zurück, den wir anschließend parsen und in unserem Frontend anzeigen können:

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

## Installation
Der folgende Befehl installiert alle npm Pakete die der genannte Tech Stack benötigt:

`npm install`

## npm targets

![TypeScript](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_typescript.png)

### TypeScript nach JavaScript kompilieren
`npm run typescript:compile`

Kompiliert alle TypeScript Quellcodes von `/src` nach JavaScript unter `/bin`.
 Die Einstellungen für den TypeScript Compiler befinden sich unter `/tsconfig.json`.

![Webpack](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_webpack.png)

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

Damit HTTP Requests auf die API gelingen muss die CORS-Policy deaktiviert werden.
 Dies gelingt über das Deaktivieren der Web Security des Browsers wie folgt:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security --user-data-dir /tmp
```

![TypeDoc](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_typedoc.png)

### TypeDoc generieren
`npm run typedoc:generate`

Generiert eine HTML Dokumentation unter `/doc` für alle TypeScript Quellcodes unter `/src/typescript`.

![ESLint](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_eslint.png)

### ESLint ausführen
`npm run eslint:check`

Führt den ESLinter für alle Quellcodes unter `/src` aus.

Einstellungen für den Linter befinden sich unter `/.eslintrc.js`.

![TSLint](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_tslint.png)

### TSLint ausführen
`npm run tslint:check`

Führt den TypeScript Linter für alle Quellcodes unter `/src` aus. Das Tool TSLint wird laut Ankündigung im Jahr 2020
 als deprecated klassifiziert und durch das Tool ESLint ersetzt. Daher verfügt dieses Projekt über Implementierungen
 beider Tools.

Einstellungen für den Linter befinden sich unter `/tslint.json`.

![Mocha](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_mocha.png)

### Alle TypeScript Tests mit Mocha aufrufen
`npm run test:all`

Ruft den Mocha Test Runner auf der alle definierten Tests in TypeScript Dateien unterhalb `/src/test` ausführt.
Die Konfiguration für den Testrunner wird als Parameter im Anschluß an den Befehl definiert.

![Jest](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/logo_jest.png)

### Alle TypeScript Tests mit Jest aufrufen
`npm run test:jest`

Ruft den Jest Test Runner auf der alle definierten Tests in TypeScript Dateien unterhalb `/src/test` ausführt, 
die über die Endung `.test.ts(x)` verfügen.

Die Konfiguration für Jest befindet sich in der `/package.json` im Abschnitt `jest`.

### Alle TypeScript Tests mit Jest aufrufen und Code Coverage generieren
`npm run test:jest-coverage`

Gleiches Verhalten wie das Target `test:jest` und im Anschluß wird die Code Coverage unter `/coverage` generiert.

![Aufgaben](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/exam.jpg)

## Aufgaben

### 1. Anzeige eines Progress-Bars 
Eine neue Instanz der Komponente **Progress**
 aus dem Ant Design Framework soll in der Komponente **RandomJoke** anzeigen, wieviele
 Chuck Norris-Witze der maximal täglich ertragbaren Anzahl von 10 bereits angezeigt wurden.

### 2. Anzeige einer Notification für leere Seiten
Zeigen Sie einen **Notification** Dialog mit einer sprechenden Beschreibung und der Severity INFO aus dem Ant Design Framework
 an, wenn der Benutzer einen Menüpunkt auswählt, für den im **Content**-Bereich noch "To be defined .." angezeigt wird.

### 3. Fixen des "Unmounted Component" Problems
Dauert die Verbindung zur API etwas länger, so kann der Benutzer, während gerade ein RandomJoke requested wird,
 zu einem anderen Menüpunkt wechseln. In diesem Fall ist beim Eintreffen der API-Response die Komponente **RandomJoke**
 nicht mehr gemountet und React reagiert mit dem Fehler **setState in unmounted component**.
 Finden Sie hierfür eine professionelle Lösung und bauen Sie diese in den Workshop ein.

![Hand Outs](https://github.com/christopherstock/AntDesignPrimer/raw/master/_ASSET/readme/150px/handout.png)

## Hand Outs

### Warum TypeScript?

https://blog.mayflower.de/6135-typescript.html

### Aufsetzen eines Web-Techstacks mit npm, TypeScript und Webpack

https://blog.mayflower.de/6324-typescript-tooling-npm-webpack.html

### TypeScript im Vergleich zu Java

https://blog.mayflower.de/6344-typeacript-java-entwickler.html

### TypeScript Workshop für Einsteiger

https://blog.mayflower.de/6229-typescript-workshop.html
