# Bild-Upload für das Startseiten-Modal

Im Admin Dashboard soll das Modal auch Bilder enthalten können. Da der Modal-Inhalt bereits als HTML gespeichert wird, fügen wir einen Bild-Upload-Button hinzu, der ein Bild in den Storage hochlädt und automatisch ein `<img>`-Tag in den Inhalt einfügt.

## Umfang

**Storage**
- Neuer öffentlicher Bucket `modal-images` (Lese-Zugriff: alle, Schreib-/Lösch-Zugriff: nur Admins via RLS auf `storage.objects`).

**Admin UI (`src/pages/admin/AdminDashboard.tsx`)**
- Neuer Bereich "Bild einfügen" über dem Inhalt-Textarea:
  - Datei-Input (Akzeptiert: jpg, png, webp; max. 5 MB)
  - Button "Bild hochladen & einfügen"
  - Nach Upload wird die öffentliche URL ermittelt und ein `<img src="..." alt="" class="w-full rounded-lg my-4" />` an der Cursor-Position (oder am Ende) im Inhalt eingefügt.
  - Toast-Bestätigung mit Hinweis "Bild eingefügt – nicht vergessen zu speichern".
- Liste der bereits hochgeladenen Bilder mit Vorschau und "Löschen"-Button (entfernt Datei aus Storage; HTML-Referenz im Inhalt muss der Admin selbst entfernen, Hinweis im UI).
- Vorschau-Bereich rendert weiterhin via `dangerouslySetInnerHTML` – Bilder erscheinen sofort.

**Darstellung im Modal (Frontend)**
- Bestehender Modal-Renderer nutzt bereits `dangerouslySetInnerHTML`, daher keine Änderung nötig.
- Optional: globale CSS-Regel für `img` im Modal-Container (max-width 100%, responsive).

## Technische Details

- Upload via `supabase.storage.from('modal-images').upload(path, file)` direkt aus dem Admin-Client (Admin ist eingeloggt, RLS lässt Upload zu).
- Dateiname: `${Date.now()}-${sanitized}.{ext}` zur Vermeidung von Konflikten.
- `getPublicUrl` liefert die URL, die ins HTML eingefügt wird.
- RLS-Policies auf `storage.objects` für Bucket `modal-images`:
  - SELECT: public
  - INSERT/UPDATE/DELETE: nur wenn `has_role(auth.uid(), 'admin')`

## Nicht enthalten

- Kein WYSIWYG-Editor – Inhalt bleibt HTML-Textarea, Bild wird als Tag injiziert.
- Keine Bildbearbeitung (Crop, Resize) im Browser.
