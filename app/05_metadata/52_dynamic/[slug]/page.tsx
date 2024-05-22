import { IHaveSlugParams } from "@/components/core/IHaveSlugParams";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * The generateMetadata function receives the same parameters as the page does.
 */
export async function generateMetadata({
  params,
}: IHaveSlugParams): Promise<Metadata> {
  //ensure that you catch any errors here that you are catching inside the component as well,
  //if you have e.g. a specific not-found.tsx since the metadata is called before the actual component and will therefore throw errors earlier.
  // const data = await getSomeData();
  // if(!data){
  //     notFound()
  // }

  return {
    title: params.slug,
  };
}

export default function Component({ params }: IHaveSlugParams) {
  return (
    <>{`Dynamic metadata: You are on page with tab title "${params.slug}"`}</>
  );
}
