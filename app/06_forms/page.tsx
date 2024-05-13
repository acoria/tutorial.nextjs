import { FormEvent } from "react";

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
  };
 
  return (
    <main>
      <form action={sendName}>
        <p>
          <label htmlFor="myNameId">Your name</label>
          <input type="text" id="myNameId" name="myName" required />
        </p>
        <button type="submit">
          {/* <button type="submit" onSubmit={onSubmit}> */}
          Send name
        </button>
      </form>
    </main>
  );
}
