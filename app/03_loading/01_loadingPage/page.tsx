import { getData } from "../../../components/datasource/datasource";

/*
    While data is being fetched, the loading.tsx page is displayed. It uses the <Suspense> component under the hood.
    Data is heavily cached so the loading page will only be displayed once.
*/
export default async function PageWithLoadingData() {
  const data = await getData();
  return <main>{data}</main>;
}
