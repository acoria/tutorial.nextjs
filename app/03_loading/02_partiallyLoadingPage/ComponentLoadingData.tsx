import { getData } from "@/components/datasource/datasource";

export default async function ComponentLoadingData() {
  await getData();
  return <div>Some more content once it was loaded</div>;
}
