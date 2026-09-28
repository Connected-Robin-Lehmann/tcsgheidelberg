import { useQuery } from "@tanstack/react-query";
import { toHTML } from "@portabletext/to-html";
import { sanityClient, urlFor } from "@/lib/sanity";
import type { ClubEvent, EventType } from "@/data/events";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Blocks = any[] | undefined;

const blocksToHtml = (body: Blocks, legacy?: string) => {
  if (body && body.length > 0) {
    return toHTML(body, {
      components: {
        types: {
          image: ({ value }) =>
            value?.asset
              ? `<img src="${urlFor(value).width(1200).auto("format").url()}" alt="${value.alt ?? ""}" />`
              : "",
        },
      },
    });
  }
  return legacy ?? "";
};

/* ---------- News ---------- */

export interface SanityNewsMedia {
  id: string;
  url: string;
  fileType: string;
  fileName: string;
}

export interface SanityNewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  media: SanityNewsMedia[];
}

export const useNews = () =>
  useQuery({
    queryKey: ["sanity", "news"],
    queryFn: async (): Promise<SanityNewsItem[]> => {
      const rows = await sanityClient.fetch(`*[_type == "news" && defined(date)] | order(date desc) {
        _id, title, date, category, body, legacyHtml,
        "images": images[]{ _key, "url": asset->url, "mime": asset->mimeType, "name": asset->originalFilename },
        "files": attachments[]{ _key, "url": asset->url, "mime": asset->mimeType, "name": asset->originalFilename }
      }`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return rows.map((r: any) => ({
        id: r._id,
        title: r.title ?? "",
        date: r.date,
        category: r.category ?? "Allgemein",
        content: blocksToHtml(r.body, r.legacyHtml),
        media: [...(r.images ?? []), ...(r.files ?? [])]
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((m: any) => m?.url)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((m: any) => ({
            id: m._key,
            url: m.url,
            fileType: m.mime ?? "application/octet-stream",
            fileName: m.name ?? m.url.split("/").pop(),
          })),
      }));
    },
  });

/* ---------- Events ---------- */

export type SiteEvent = ClubEvent & { featured?: boolean };

export const useEvents = () =>
  useQuery({
    queryKey: ["sanity", "events"],
    queryFn: async (): Promise<SiteEvent[]> => {
      const today = new Date().toISOString().slice(0, 10);
      const rows = await sanityClient.fetch(
        `*[_type == "event" && sortDate >= $today] | order(sortDate asc) {
          _id, title, dateLabel, time, location, description, type, featured,
          contact, linkUrl, linkLabel, attachmentLabel, "attachmentUrl": attachment.asset->url
        }`,
        { today },
      );
      // Content is maintained in German only; English pages show the same text.
      const both = (v?: string) => ({ de: v ?? "", en: v ?? "" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return rows.map((r: any) => ({
        id: r._id,
        date: r.dateLabel ?? "",
        time: both(r.time),
        title: both(r.title),
        location: both(r.location),
        description: both(r.description),
        type: (r.type ?? "sport") as EventType,
        featured: !!r.featured,
        contact: r.contact ?? undefined,
        linkUrl: r.linkUrl ?? undefined,
        linkLabel: r.linkLabel ? both(r.linkLabel) : undefined,
        attachmentUrl: r.attachmentUrl ?? undefined,
        attachmentLabel: r.attachmentLabel ? both(r.attachmentLabel) : undefined,
      }));
    },
  });

/* ---------- Homepage pop-up ---------- */

export const useHomeModal = () =>
  useQuery({
    queryKey: ["sanity", "homepageModal"],
    queryFn: async () => {
      const r = await sanityClient.fetch(`*[_id == "homepageModal"][0]{ active, title, body, legacyHtml }`);
      if (!r) return null;
      return { active: !!r.active, title: r.title ?? "", content: blocksToHtml(r.body, r.legacyHtml) };
    },
  });
