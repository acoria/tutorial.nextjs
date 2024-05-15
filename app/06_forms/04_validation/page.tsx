import { getData } from "@/components/datasource/datasource";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { FormSubmitButton } from "../03_serverActionWithUX/FormSubmitButton";
import { useFormState } from "react-dom";
import { IData } from "./IData";

export default function Validation() {
  const sendName = async (formData: FormData): Promise<IData> => {
    "use server";

    //a function taking a while to execute
    const data = await getData();

    const returnedData: IData = { name: data };

    return returnedData
  };

  useActionState(sendName, {name: "test"});

  return (
    <main>
      <form action={sendName}>
        <label htmlFor="nameInputId">Name</label>
        <input id="nameInputId" name="nameInput" />
        <FormSubmitButton />
      </form>
    </main>
  );
}
