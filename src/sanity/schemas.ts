import { defineArrayMember, defineField, defineType } from "sanity";

const richText = defineField({
  name: "body",
  title: "Text",
  type: "array",
  of: [
    defineArrayMember({ type: "block" }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Bildbeschreibung", type: "string" })],
    }),
  ],
});

const legacyHtml = defineField({
  name: "legacyHtml",
  title: "Alter Text (übernommen)",
  description: "Aus dem alten System übernommen. Wird nur angezeigt, wenn das Feld „Text“ leer ist.",
  type: "text",
  rows: 4,
  readOnly: true,
  hidden: ({ value }) => !value,
});

export const news = defineType({
  name: "news",
  title: "Nachricht",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "date",
      title: "Datum",
      type: "date",
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Turniere", value: "Turnier" },
          { title: "Spielberichte", value: "Spiel" },
          { title: "Veranstaltungen", value: "Veranstaltung" },
          { title: "Allgemeines", value: "Allgemein" },
        ],
        layout: "radio",
      },
      initialValue: "Allgemein",
      validation: (r) => r.required(),
    }),
    richText,
    legacyHtml,
    defineField({
      name: "images",
      title: "Bilder",
      description: "Das erste Bild wird als Vorschaubild verwendet.",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      name: "attachments",
      title: "Dateien (z. B. PDF)",
      type: "array",
      of: [defineArrayMember({ type: "file" })],
    }),
  ],
  orderings: [{ title: "Datum (neueste zuerst)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", media: "images.0" } },
});

export const event = defineType({
  name: "event",
  title: "Veranstaltung",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "sortDate",
      title: "Datum (für Sortierung)",
      description: "Bestimmt die Reihenfolge. Termine werden automatisch nach diesem Datum sortiert.",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "dateLabel",
      title: "Angezeigtes Datum",
      description: "z. B. „04.10.2026“, „07.09. - 15.09.2026“ oder „Ende Oktober 2026“",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({ name: "time", title: "Uhrzeit", description: "z. B. „13:00 Uhr“ oder „ganztägig“", type: "string" }),
    defineField({ name: "location", title: "Ort", type: "string" }),
    defineField({ name: "description", title: "Beschreibung", type: "text", rows: 4 }),
    defineField({
      name: "type",
      title: "Art",
      type: "string",
      options: {
        list: [
          { title: "Party", value: "party" },
          { title: "Sport", value: "sport" },
          { title: "Turnier", value: "tournament" },
          { title: "Camp", value: "camp" },
          { title: "Versammlung", value: "meeting" },
          { title: "Training", value: "training" },
          { title: "Infrastruktur", value: "infrastructure" },
          { title: "Essen", value: "food" },
          { title: "Punktspiel", value: "match" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      title: "Ganz oben hervorheben",
      description: "Wird unter „Kommende Veranstaltungen“ an erster Stelle gezeigt.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "contact", title: "Kontakt-E-Mail", type: "string" }),
    defineField({ name: "linkUrl", title: "Link", type: "url" }),
    defineField({ name: "linkLabel", title: "Link-Beschriftung", type: "string" }),
    defineField({ name: "attachment", title: "Download-Datei", type: "file" }),
    defineField({ name: "attachmentLabel", title: "Download-Beschriftung", type: "string" }),
  ],
  orderings: [{ title: "Datum", name: "sortDateAsc", by: [{ field: "sortDate", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "dateLabel" } },
});

export const homepageModal = defineType({
  name: "homepageModal",
  title: "Startseiten-Pop-up",
  type: "document",
  fields: [
    defineField({
      name: "active",
      title: "Pop-up anzeigen",
      description: "Wenn aktiv, erscheint das Pop-up einmal pro Besuch auf der Startseite.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "title", title: "Titel", type: "string" }),
    richText,
    legacyHtml,
  ],
  preview: { select: { title: "title", active: "active" }, prepare: ({ title, active }) => ({ title: title || "Pop-up", subtitle: active ? "Aktiv" : "Inaktiv" }) },
});

export const schemaTypes = [news, event, homepageModal];
