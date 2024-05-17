"use client";
import { useFormState } from "react-dom";
import { FormSubmitButton } from "../73_serverActionWithUX/FormSubmitButton";
import styles from "./page.module.scss";
import sendName from "./sendName";

/**
 * The {@link useFormState} hook handles responses returned by the server action function and potentially updates the ui depending on this state 
 * e.g. showing an validation error message for a form.
 * 
 * The action to call is passed as well as an initial value.
 * The hook returns:
 *  - a state (either the initial state or the data returned by the action)
 *  - the action to call inside of the form instead of the passed one
 */
export default function Validation() {
  const [state, formAction] = useFormState(sendName, {
    data: { name: "test" },
  });

  return (
    <main>
      {state.error && <div className={styles.error}>{state.error}</div>}
      <form action={formAction}>
        <label htmlFor="nameInputId">Name</label>
        <input id="nameInputId" name="nameInput" />
        <FormSubmitButton />
      </form>
    </main>
  );
}
