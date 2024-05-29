import { IHaveModalAndChildren } from "./IHaveModalAndChildren";

/**
 * Unfortunately I cannot get this example to work. The modal should be a small component shown on top of the main layout.
 * See chapter 150 in Udemy Next.js tutorial
 */
export default function PlantDetailLayout({
  children,
  modal,
}: IHaveModalAndChildren) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
