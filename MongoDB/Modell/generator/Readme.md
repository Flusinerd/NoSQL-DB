# MongoDB Generator
Dieser Generator generiert Foren Daten für das MongoDB Beispiel in JSON Form.  
Das Ergebnis ist in ``generated`` zu finden.  
Außerdem gibt es eine exe die keine Node.JS version erfordet.
Vorraussetzung für die Verwendung des Generators ist eine halbwegs aktuelle node.js version und npm.

Es werden für jede Collection 2 Dateien erstellt:
- Die lesbar "*.pretty.json"
- Die Importierbare "*.json"

## Installation, wenn man nicht die exe nutzt
Ein Terminal in ``./generator`` öffnen und ``npm i`` ausführen.

## Nutzung
Einfach ein Terminal im ``./dist`` ordner öffnen und dort dann die ``index.js`` ausführen:
```bash
node ./index.js
```
oder einfach
```bash
node .
```

## Nutzung der .exe
Einfach die exe ausführe. Im gleichen Ordner wird ein ``genrated`` Ordner erstellt, welcher die ``JSON`` Dateien enthält.

## Anpassung, nur bei node.js:
Es werden 10 Subforen, 20 Topics, 30 Nutzer und 100 Posts generiert.
Dies kann in der ``./dist/index.js`` angepasst werden: Dazu einfach die Zahlen in den Funktionsaufrufen anpassen:
```ts
generateSubforums(10);
generateUsers(30);
generateTopics(20);
generatePosts(100);
```