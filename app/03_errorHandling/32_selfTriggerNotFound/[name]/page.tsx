import { IHaveNameParam } from "@/components/core/IHaveNameParam";
import { notFound } from "next/navigation";

const loadDataByName = (name: string): string => "";

/* You can trigger the call of the not-found.tsx by yourself by calling notFound() 
        e.g. if some details for a page cannot be found after loading data
  */

export default function SelfTriggerNotFound({ params }: IHaveNameParam) {
  const data = loadDataByName(params.name);
  if (data === "") {
    notFound();
  }
  return <>{data}</>;
}
