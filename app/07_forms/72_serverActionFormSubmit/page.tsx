import { redirect } from "next/navigation";

export default function ServerActionFormSubmit() {
  // Creates a server action. An action that is guaranteed to execute on the server.
  // It needs to be an async function. In FormData any field can be addressed by its name.
  const sendForm = async (formData: FormData) => {
    "use server";

    const name = formData.get("nameInput");

    //can be found on the server console -> since it is executed on server side
    console.log(name);

    //you can choose to navigate somewhere afterwards
    redirect("/07_forms/submittedForm");
  };

  return (
    <main>
      <form action={sendForm}>
        <label htmlFor="nameInputId">Name</label>
        <input type="text" id="nameInputId" name="nameInput" />
        <button type="submit">Send name</button>
      </form>
    </main>
  );
}
