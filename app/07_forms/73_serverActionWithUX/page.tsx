import { getData } from "@/components/datasource/datasource";
import { redirect } from "next/navigation";
import { FormSubmitButton } from "./FormSubmitButton";

/**
 * Make use of the status information to achieve better UX.
 * If the server action takes a while, without a status it looks like nothing is happening.
 * Therefor a submit button indicating a status can be added.
 * To access the status hook, it needs to be located inside a client component {@link FormSubmitButton}.
 */
export default function ServerActionWithUX() {
  const sendName = async (formData: FormData) => {
    "use server";

    console.log(formData.get("nameInput"));

    //a function taking a while to execute
    await getData();

    redirect("/06_forms/submittedForm");
  };

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
