import { notFound } from "next/navigation";

interface IProps {
  name: string;
}
const loadDataByName = (name: string): string => "";

/* You can trigger the call of the not-found.tsx by yourself by calling notFound() 
        e.g. if some details for a page cannot be found after loading data
  */

export default function SelfTriggerNotFound(
  props: IProps = { name: "someName" }
) {
  const data = loadDataByName(props.name);
  if (data === "") {
    notFound();
  }
  return <>{data}</>;
}
