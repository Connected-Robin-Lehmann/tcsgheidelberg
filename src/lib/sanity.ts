import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const SANITY_PROJECT_ID = "u8ggdtkm";
export const SANITY_DATASET = "production";

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: "2025-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanityClient);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);
