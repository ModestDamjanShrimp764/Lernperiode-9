# Lernperiode-9

## 20.02.26

# Technologie-Entscheidung 
In Lernperiode 8 habe ich ein Frontend-Projekt mit HTML, JavaScript und Chart.js umgesetzt. Die Daten waren statisch im Code gespeichert.

# Ziel dieser Lernperiode
Ich möchte nun eine Backend-Technologie erlernen, um mein Projekt um eine API zu erweitern. Ziel ist es, dass die Daten nicht mehr im Frontend gespeichert sind, sondern von einem Server geliefert werden.

# Persönliches Lernziel
Ich möchte verstehen, wie Frontend und Backend miteinander kommunizieren und wie eine einfache REST-API aufgebaut ist.

# Mögliche Technologien
- Node.js + Express → JavaScript Backend Framework
- ASP.NET Backend mit C#
- FastAPI Python Framework
- NestJS Fortgeschrittenes Node.js Framework

# Entscheidung
Ich habe mich für Node.js mit Express entschieden.
https://expressjs.com/

# Begründung
Gleiche Programmiersprache (JavaScript)
Gute Dokumentation
Schnell einsatzbereit
Ideal für REST-APIs
Passt optimal zu meinem Chart.js Projekt

# Lernperiode-9

## 20.02.26

# Technologie-Entscheidung 
In Lernperiode 8 habe ich ein Frontend-Projekt mit HTML, JavaScript und Chart.js umgesetzt. Die Daten waren statisch im Code gespeichert.

# Ziel dieser Lernperiode
Ich möchte nun eine Backend-Technologie erlernen, um mein Projekt um eine API zu erweitern. Ziel ist es, dass die Daten nicht mehr im Frontend gespeichert sind, sondern von einem Server geliefert werden.

# Persönliches Lernziel
Ich möchte verstehen, wie Frontend und Backend miteinander kommunizieren und wie eine einfache REST-API aufgebaut ist.

# Mögliche Technologien
- Node.js + Express → JavaScript Backend Framework
- ASP.NET Backend mit C#
- FastAPI Python Framework
- NestJS Fortgeschrittenes Node.js Framework

# Entscheidung
Ich habe mich für Node.js mit Express entschieden.
https://expressjs.com/

# Begründung
Gleiche Programmiersprache (JavaScript)
Gute Dokumentation
Schnell einsatzbereit
Ideal für REST-APIs
Passt optimal zu meinem Chart.js Projekt

## Heute erledigt (20.02.26)
- Technologie-Recherche gemacht
- Entscheidung Node.js + Express dokumentiert
- Ziele der Lernperiode definiert
- Nächste Schritte geplant (siehe unten)

## Nächste Schritte (Plan)
1. Node.js Projekt aufsetzen (npm init)
2. Express installieren und Hello World Server starten
3. Erste Route /api/presidents liefert JSON
4. Frontend (Chart.js) holt Daten via fetch von der API

# Ordnerstruktur 
/backend
/frontend (LP8)
/docs

# Zusammenfassung
Heute habe ich die passende Backend-Technologie für Lernperiode 9 ausgewählt und begründet. Ziel ist eine REST-API, welche die Chart-Daten als JSON liefert, damit die Daten nicht mehr statisch im Frontend sind. Zudem habe ich die nächsten Arbeitsschritte in 4 Pakete geplant und im Repository dokumentiert.

# Hinweis zur heutigen Sitzung
Die praktische Umsetzung (Installation von Node.js und Erstellung des Servers) konnte heute nicht durchgeführt werden, da die  Entwicklungsumgebung auf diesem Gerät nicht vollständig eingerichtet war. Die Umsetzung erfolgt in der nächsten Sitzung gemäss den definierten Arbeitspaketen.

## 27.02.26
# Arbeitspakete
- [x] Backend-Ordner erstellen, Node-Projekt starten und Express installieren. Server auf Port 3000 erstellen, der bei / „Backend läuft“ anzeigt.
- [x] Route /api/presidents erstellen, die ein JSON mit Name und Votes zurückgibt. Im Browser prüfen, ob die Daten angezeigt werden.
- [x] Im Frontend die statischen Daten entfernen und stattdessen mit fetch() die Daten vom Backend laden und im Chart anzeigen.
- [x] Backend und Frontend testen, Fehler prüfen (Console/Terminal) und im README kurz dokumentieren, wie der Server gestartet wird. 06.03.26

# Zusammenfassung 
Heute wurde das Dashboard technisch verbessert, CRUD mit ID stabil umgesetzt, Design modernisiert und Funktionen wie Sortierung, Suche, Statistik, Dark Mode und CSV-Export integriert.

## 06.03.26 
- [x] UI weiter verbessern durch Animationen, bessere Hover-Effekte und optische Hervorhebung der Top 3.
- [x] UI weiter verbessern durch Animationen, bessere Hover-Effekte und optische Hervorhebung der Top 3.
- [x] Backend sauber strukturieren mit Error-Handling und Logging für stabilere Architektur.
- [x] Dashboard funktional erweitern mit Ranking-Tabelle und Vorbereitung für spätere Datenbank-Anbindung.

# Zusammenfassung 
In dieser Sitzung habe ich mein Dashboard weiter verbessert. Ich habe das Design moderner gemacht und eine Ranking-Tabelle hinzugefügt. Außerdem habe ich die Benutzerfreundlichkeit verbessert, z.B. mit Bestätigungen beim Löschen und besseren Diagrammfarben für die Top-3 Präsidenten. Dadurch wirkt das Dashboard übersichtlicher und professioneller.

## 13.03.26

- [x] Eine Prozentanzeige der Votes im Diagramm hinzufügen, damit die Verteilung der Stimmen besser sichtbar wird.
- [x] Eine kleine Animation beim Laden der Daten einbauen, damit das Dashboard dynamischer wirkt.
- [x] Eine Möglichkeit hinzufügen, Präsidenten nach Namen oder Votes direkt zu filtern.
- [x] Eine Möglichkeit hinzufügen, Präsidenten nach Namen oder Votes direkt zu filtern.

# Zusammenfassung
In dieser Sitzung wurde das Dashboard funktional erweitert. Eine Prozentanzeige der Votes im Diagramm wurde integriert, damit die Stimmenverteilung besser sichtbar ist. Zusätzlich wurde eine Ladeanimation beim Laden der Daten eingebaut, eine Filterfunktion nach Präsidentennamen ergänzt und das Dashboard responsiver gestaltet, damit es auch auf kleineren Bildschirmen gut dargestellt wird.

## 20.03.26
- [x] Eine visuelle Hervorhebung der Top-3 Präsidenten im Diagramm und in der Tabelle verbessern.
- [x] Eine kleine Statistik-Sektion erweitern, z.B. mit Prozentanteilen der Votes.
- [x] Die Benutzeroberfläche weiter optimieren (Icons, Abstände, bessere Buttons).
- [x] Den Code weiter strukturieren und wichtige Funktionen im Frontend kommentieren.

# Zusammenfassung
Heute habe ich das Dashboard deutlich verbessert. Ich habe die Top-3 visuell mit Medaillen hervorgehoben, die Statistik um Prozentanzeigen erweitert und das Diagramm im Trading-App-Stil optimiert. Zusätzlich habe ich die Benutzeroberfläche übersichtlicher gestaltet und den Code besser strukturiert sowie wichtige Funktionen kommentiert, damit alles verständlicher und professioneller wirkt.

## 27.03.26
- [x] Das gesamte Dashboard final testen (CRUD, Diagramm, Export, Dark Mode) und alle Fehler oder Bugs beheben, damit die Anwendung vollständig stabil läuft.
- [x] Das Projekt dokumentieren, Tutorial schreiben und abgeben (kurze Beschreibung, Funktionen erklären, Screenshots hinzufügen).

Heute habe ich das Dashboard vollständig fertiggestellt und alle Funktionen final getestet, darunter CRUD-Operationen, Diagramm, Export und Dark Mode, wobei ich gefundene Fehler behoben habe. Anschließend habe ich das Projekt dokumentiert, ein Tutorial erstellt und alles sauber auf GitHub hochgeladen, inklusive Struktur und Beschreibung.






https://modestdamjanshrimp764.github.io/chartjs-projekt/
## Tutorial
docs/tutorial.md

