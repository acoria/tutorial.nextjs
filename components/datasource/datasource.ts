export const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 2000);
  });
};

export const getEmptyName = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 1000);
  });
};
