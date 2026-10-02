import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section className="py-16">
      <PageHeading title="gallery">
        Nine frames. Click any image to open it full size, then use the arrow
        keys to move between them.
      </PageHeading>
      <GalleryGrid />
    </section>
  );
}
