//IHaveSlugParams in short notation: { params: { slug: string };}

import { IHaveSlugParams } from "@/components/core/IHaveSlugParams";

/*
  This dynamic page will take any param/slug and create a page with it under /dynamicRoute
 */
export default function DynamicRoutePage({ params }: IHaveSlugParams) {
  return (
    <main>
      <div>{`A dynamic route page with param(=slug): "${params.slug}"`}</div>
    </main>
  );
}
