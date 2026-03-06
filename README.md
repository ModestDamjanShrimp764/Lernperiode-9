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
- [ ] UI weiter verbessern durch Animationen, bessere Hover-Effekte und optische Hervorhebung der Top 3.
- [ ] UI weiter verbessern durch Animationen, bessere Hover-Effekte und optische Hervorhebung der Top 3.
- [ ] Backend sauber strukturieren mit Error-Handling und Logging für stabilere Architektur.
- [ ] Dashboard funktional erweitern mit Ranking-Tabelle und Vorbereitung für spätere Datenbank-Anbindung.


