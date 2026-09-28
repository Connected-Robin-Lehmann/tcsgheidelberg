import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "@/lib/sanity";
import { schemaTypes } from "./schemas";

const MODAL_ID = "homepageModal";

export default defineConfig({
  name: "default",
  title: "TC Schwarz-Gelb Heidelberg",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            S.documentTypeListItem("news").title("Nachrichten"),
            S.documentTypeListItem("event").title("Veranstaltungen"),
            S.listItem()
              .title("Startseiten-Pop-up")
              .id(MODAL_ID)
              .child(S.document().schemaType(MODAL_ID).documentId(MODAL_ID)),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    // Pop-up is a single document – hide it from "create new"
    templates: (templates) => templates.filter((t) => t.schemaType !== MODAL_ID),
  },
  document: {
    actions: (actions, ctx) =>
      ctx.schemaType === MODAL_ID
        ? actions.filter((a) => !["duplicate", "delete", "unpublish"].includes(a.action ?? ""))
        : actions,
  },
});
