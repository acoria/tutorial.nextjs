interface IHaveSlug {
  slug: string;
}

interface IHaveParams {
  params: IHaveSlug;
}
//IHaveParams in short notation: { params: { slug: string };}

/*
  This dynamic page will take any param/slug and create a page with it under /dynamicRoute
 */
export default function DynamicRoutePage({ params }: IHaveParams) {
  return (
    <main>
      <div>{`A dynamic route page with param(=slug): "${params.slug}"`}</div>
    </main>
  );
}
