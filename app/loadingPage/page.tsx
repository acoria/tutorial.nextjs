import { getData } from "./datasource";

export default async function PageWithLoadingData() {
  const data = await getData();
  return <main>{data}</main>;
}
