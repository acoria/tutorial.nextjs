//IHaveSlugParams in short notation: { params: { slug: string };}

import { IHaveSlugParam } from "@/components/core/IHaveSlugParam";

/*
  This dynamic page will take any param/slug and create a page with it under /dynamicRoute
 */
export default function DynamicRoutePage({ params }: IHaveSlugParam) {
  return (
    <main>
      <div>{`A dynamic route page with param(=slug): "${params.slug}"`}</div>
    </main>
  );
}
