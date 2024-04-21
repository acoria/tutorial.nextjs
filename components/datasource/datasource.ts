export const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 2000);
  });
};
