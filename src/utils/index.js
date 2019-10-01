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
