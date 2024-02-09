# lanis-mobile-autoconfig

<a href="https://github.com/alessioc42/lanis-mobile">
 <p align="center">
  <img src="https://github.com/alessioC42/lanis-mobile/assets/84250128/19d30436-32f7-4cbe-b78e-f2fee3583c28" width="60%">
 </p>
</a>
## Wieso ist das notwendig
Ein Grund für die Entwicklung von Lanis-Mobile waren die schlechten Filter der Filterlösung des Schulportals. Diese funktioniert an sich sehr gut, wenn sie richtig eingesetzt wird. Allerdings ist die Logik, nach der die Klasse des Vertretungseintrags mit der Klasse des Benutzers verglichen wird, sehr eingeschränkt. Außerdem verwenden verschiedene Schulen unterschiedliche Namensschemata, um ihre Klassen zu organisieren. 

In [der App](https://github.com/alessioc42/lanis-mobile) wurde dieses Problem gelöst, indem ein eigenes Filtersystem erstellt wurde, das alle Einträge gegen benutzerdefinierte Filter prüft. Hier wird das Problem durch ein anderes ersetzt. Viele Nutzer wissen nicht genau, wie sie ihren Filter einstellen müssen, damit er optimal funktioniert. 

Dieses Problem soll gelöst werden, indem der beste Filter einfach extern berechnet wird. Extern deshalb, weil eine neue Version der Anwendung notwendig wäre, um einen Filter für eine neue Schule zu konfigurieren. So können verschiedene Schulen hinzugefügt werden, ohne einen neuen Release zu machen.

## Beitragen
[guide](https://github.com/alessioC42/lanis-mobile-autoconfig/wiki/Eine-Schule-hinzuf%C3%BCgen)

Mach eine PR in der du die Datei "/src/school_config.js" editierst, dass sie für deine Schule passt. Wenn du dass nicht kannst, dann hilft es uns schon, wenn du uns informationen zu deiner Schule gibst. 

Es wäre ideal, wenn du eine eigene Pull Request erstellen kannst, um deine Schule zu implementieren (JavaScript-Kenntnisse erforderlich). Es würde uns jedoch auch helfen, wenn du uns nur einige Namenskonventionen für Klassen in Schulen und Einträge im Vertretungsplan deiner Schule zur Verfügung stellen könntest. (bevorzugt ein GH Issue aber auch per Mail an <a href="mailto:alessioc42.dev@gmail.com">mich</a>)

## API
```
https://lanis-mobile-autoconfig.alessioc42.workers.dev/substitutions/<<<schoolID>>>?stufe=<<<jahrgangsstufe>>>&klasse=<<<klasse>>>
```
