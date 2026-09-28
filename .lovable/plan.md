# Sanity als CMS für Schwarz-Gelb Heidelberg

## Ziel
Der Verein verwaltet Nachrichten, das Startseiten-Pop-up und Veranstaltungen komfortabel über Sanity. Unter `/admin` öffnet sich direkt das Sanity Studio (ersetzt das bisherige Admin-Dashboard). Inhalte werden nur auf Deutsch gepflegt; die englischen Seiten zeigen denselben Text.

## Schritte
1. **Sanity verbinden** – Sanity-Konnektor verknüpfen, Projekt-ID und Dataset (`production`) auslesen, CORS-Freigaben für Vorschau- und Live-Domain setzen.
2. **Inhaltstypen anlegen**
   - `news`: Titel, Slug, Datum, Kategorien, Text (Rich Text), Titelbild, Bildergalerie, PDF-Anhänge
   - `modal`: Titel, Inhalt (Rich Text mit Bildern), aktiv ja/nein (nur ein Eintrag)
   - `event`: Titel, Beschreibung, Datum, Uhrzeit, Ort, Kategorie, Link, Download-Datei, Bild/Plakat
3. **Studio unter /admin** – Sanity Studio direkt in die Seite einbetten, Login über Sanity-Konten (Vereinsmitglieder werden in Sanity eingeladen). Altes Dashboard und Login-Seite entfernen.
4. **Website auf Sanity umstellen** – Aktuelles/News-Seiten, News-Detail, Startseiten-Modal, Startseiten-Hero-Termin und Veranstaltungsseiten (DE + EN) lesen ihre Inhalte aus Sanity. Stil und Darstellung bleiben unverändert (Bilder `object-contain`, Lightbox für Anhänge).
5. **Bestand übernehmen** – Einmaliges Übertragen aller bestehenden Nachrichten inkl. Bilder/PDFs, des aktuellen Modals und der Termine aus `events.ts` nach Sanity.
6. **Aufräumen** – Alte Datenbanktabellen/Speicher bleiben vorerst als Backup bestehen, werden aber nicht mehr genutzt.

## Hinweise für den Kunden
- Sanity ist im kostenlosen Tarif für diese Nutzung ausreichend (bis 20 Benutzer).
- Redakteure brauchen ein Sanity-Konto und eine Einladung ins Projekt.
- Änderungen sind nach dem Veröffentlichen in Sanity sofort auf der Website sichtbar.

## Technische Details
- Pakete: `sanity`, `@sanity/client`, `@sanity/image-url`, `@portabletext/react`, `styled-components`.
- Studio als Route `/admin/*` via `<Studio config={...} basePath="/admin" />`, lazy geladen, damit die öffentliche Seite nicht größer wird.
- Schemas in `src/sanity/schemas/`, Client + `urlFor` in `src/lib/sanity.ts`, Abfragen mit React Query (`useCdn: true`).
- Migration per Skript: News aus `news_items`/`news_media` lesen, Dateien als Sanity-Assets hochladen (benötigt einmalig einen Sanity-Schreib-Token als Secret).
- `events.ts` wird durch Sanity-Abfragen ersetzt; Supabase-Admin-Rollen für News entfallen.
- Entscheidung in `AGENTS.md` festhalten: "Redaktionelle Inhalte kommen aus Sanity".
