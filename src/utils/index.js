const logger = () => setTimeout(console.log.bind(console, "Load!"));

export { logger };

export const insertItem = (array, index, item) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index),
];

export const removeItem = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

export const updateObjectInArray = (array, index, item) =>
  array.map((element, i) => {
    if (i !== index) {
      return element;
    }
    return {
      ...element,
      ...item,
    };
  });

export const updateStorage = name => data =>
  sessionStorage.setItem(
    name,
    typeof data === "string" ? data : JSON.stringify(data),
  );

export const getRandom = (min, max) => ~~(Math.random() * (max - min) + min);

export const getRandomString = length => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(getRandom(0, charactersLength));
  }
  return result;
};
