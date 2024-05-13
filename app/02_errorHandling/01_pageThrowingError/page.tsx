export default function PageThrowingError() {
  const throwError = () => {
    // throw Error("I am a wanted error");
  };
  return <>{throwError()}</>;
}
