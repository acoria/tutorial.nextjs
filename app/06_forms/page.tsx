import { getData } from "@/components/datasource/datasource";
import { redirect } from "next/navigation";
import { FormEvent } from "react";
import FormSubmitButton from "./FormSubmitButton";

/**
 * Forms have a submit status, which is accessible via useFormStatus, as long as the component using it is part of the form. See {@link FormSubmitButton}
 */
export default function Form() {
  // This is the default way of handling submits. This can be replaced by a server action.
  const onSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //send data
  };

  // Creates a server action. An action that is guaranteed to execute on the server.
  // It needs to be an async function. In FormData any field can be addressed by its name.
  const sendName = async (formData: FormData) => {
    "use server";
    console.log(formData.get("myName"));

    //some function that takes a while
    await getData();

    //you can choose to navigate somewhere afterwards
    redirect("/06_forms/submittedForm");
  };

  return (
    <main>
      <form action={sendName}>
        <p>
          <label htmlFor="myNameId">Your name</label>
          <input type="text" id="myNameId" name="myName" required />
        </p>
        {/* 1) The "old fashioned" way of submitting a form: */}
        {/* <button type="submit" onSubmit={onSubmit}> */}
        {/* 2) Submitting a form via server action: */}
        {/* <button type="submit">Send name</button> */}
        {/* 3) Add a state for better user experience and therefore move it to client component: */}
        <FormSubmitButton />
      </form>
    </main>
  );
}
