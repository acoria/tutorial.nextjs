"use server";
import { getEmptyName } from "@/components/datasource/datasource";
import { IEnvelope } from "./IEnvelope";

export default async function sendName(
  prevState: IEnvelope,
  formData: FormData
): Promise<IEnvelope> {
  //a function taking a while to execute
  const name = await getEmptyName();

  console.log(formData.get("nameInput"));

  let envelope: IEnvelope;
  if (name !== "") {
    envelope = { data: { name: name } };
  } else {
    envelope = { error: "Error: name could not be found" };
  }
  return envelope;
}
