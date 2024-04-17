import { getData } from "./datasource";

/*
    While data is being fetched, the loading.tsx page is displayed. Data is heavily cached so the page will only be displayed once.
*/
export default async function PageWithLoadingData() {
  const data = await getData();
  return <main>{data}</main>;
}
