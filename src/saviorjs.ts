/* A collection of utility functions built to save your ass. */

/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The text to slugify.
 * @returns {string} - The slugified text.
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

/**
 * Gets the nth letter from a string.
 * @param {string} text - The text to get the letter from.
 * @param {number} n - The position of the letter (0-based index).
 * @returns {string} - The Nth letter of the string.
 */
export const getNthLetter = (text: string, n: number): string => {
  if (n < 0 || n >= text.length) {
    return "";
  }
  return text.charAt(n);
};

/**
 * Gets the first letter of a string.
 * @param {string} text - The text to get the letter from.
 * @returns {string} - The first letter of the string.
 */
export const getFirstLetter = (text: string): string => {
  return text.charAt(0);
};

/**
 * Gets the last letter of a string.
 * @param {string} text - The text to get the letter from.
 * @returns {string} - The last letter of the string.
 */
export const getLastLetter = (text: string): string => {
  return text.charAt(text.length - 1);
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} text - The text to capitalize.
 * @returns {string} - The capitalized text.
 */
export const capitalize = (text: string): string => {
  if (text.length === 0) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Reverses a string.
 * @param {string} text - The text to reverse.
 * @returns {string} - The reversed text.
 */
export const reverseString = (text: string): string => {
  return text.split("").reverse().join("");
};

/**
 * Checks if a string is a palindrome.
 * @param {string} text - The text to check.
 * @returns {boolean} - True if the text is a palindrome, false otherwise.
 */
export const isPalindrome = (text: string): boolean => {
  const cleanedText = text.replace(/[\W_]/g, "").toLowerCase();
  return cleanedText === cleanedText.split("").reverse().join("");
};

/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param {string} text - The text to truncate.
 * @param {number} length - The maximum length of the truncated text.
 * @returns {string} - The truncated text.
 */
export const truncate = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};

/**
 * Creates a deep clone of an object.
 * @param {T} obj - The object to clone.
 * @returns {T} - The cloned object.
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Checks if a value is empty (null, undefined, empty array, or empty object).
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is empty, false otherwise.
 */
export const isEmpty = (value: any): boolean => {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === "string")
    return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};

/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
export const isEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Converts a string to camelCase.
 * @param {string} text - The text to convert.
 * @returns {string} - The camelCased text.
 */
export const camelCase = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};

/**
 * Converts a string to kebab-case.
 * @param {string} text - The text to convert.
 * @returns {string} - The kebab-cased text.
 */
export const kebabCase = (text: string): string => {
  return text.replace(/\s+/g, "-").toLowerCase();
};

/**
 * Converts a string to snake_case.
 * @param {string} text - The text to convert.
 * @returns {string} - The snake_cased text.
 */
export const snakeCase = (text: string): string => {
  return text.replace(/\s+/g, "_").toLowerCase();
};

/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the random string.
 * @returns {string} - The random string.
 */
export const randomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

/**
 * Flattens a nested array.
 * @param {any[]} array - The array to flatten.
 * @returns {any[]} - The flattened array.
 */
export const flattenArray = (array: any[]): any[] => {
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
};

/**
 * Removes duplicate values from an array.
 * @param {any[]} array - The array to deduplicate.
 * @returns {any[]} - The deduplicated array.
 */
export const uniq = (array: any[]): any[] => {
  return Array.from(new Set(array));
};

/**
 * Splits an array into chunks of a specified size.
 * @param {T[]} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} - The array of chunks.
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) throw new Error("Size should be a positive integer.");

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

/**
 * Randomly shuffles an array.
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} - The shuffled array.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param {any} value - The first value.
 * @param {any} other - The second value.
 * @returns {boolean} - True if the values are equivalent, false otherwise.
 */
export const isEqual = (value: any, other: any): boolean => {
  if (value === other) return true;

  if (
    value == null ||
    other == null ||
    typeof value !== "object" ||
    typeof other !== "object"
  ) {
    return false;
  }

  const keysValue = Object.keys(value);
  const keysOther = Object.keys(other);

  if (keysValue.length !== keysOther.length) return false;

  for (const key of keysValue) {
    if (!keysOther.includes(key) || !isEqual(value[key], other[key])) {
      return false;
    }
  }

  return true;
};

/**
 * Groups the elements of an array based on a given key or function.
 * @param {T[]} array - The array to group.
 * @param {Function | string} key - The key or function to group by.
 * @returns {object} - The grouped object.
 */
export const groupBy = <T>(
  array: T[],
  key: ((item: T) => string) | keyof T
): { [key: string]: T[] } => {
  return array.reduce(
    (acc, item) => {
      const groupKey = typeof key === "function" ? key(item) : item[key];
      if (!acc[groupKey as string]) {
        acc[groupKey as string] = [];
      }
      acc[groupKey as string].push(item);
      return acc;
    },
    {} as { [key: string]: T[] }
  );
};

/**
 * Formats a date into a readable string.
 * @param {Date} date - The date to format.
 * @param {string} format - The format string.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date: Date, format: string): string => {
  const map: { [key: string]: string } = {
    MM: ("0" + (date.getMonth() + 1)).slice(-2),
    DD: ("0" + date.getDate()).slice(-2),
    YYYY: date.getFullYear().toString(),
    HH: ("0" + date.getHours()).slice(-2),
    mm: ("0" + date.getMinutes()).slice(-2),
    ss: ("0" + date.getSeconds()).slice(-2),
  };

  return format.replace(/MM|DD|YYYY|HH|mm|ss/g, (matched) => map[matched]);
};

/**
 * Parses a query string into an object.
 * @param {string} queryString - The query string to parse.
 * @returns {object} - The parsed query object.
 */
export const parseQueryStringToObject = (
  queryString: string
): { [key: string]: string } => {
  return queryString
    .substring(1)
    .split("&")
    .reduce<{ [key: string]: string }>((acc, pair) => {
      const [key, value] = pair.split("=");
      acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
      return acc;
    }, {});
};

/**
 * Converts an object into a query string.
 * @param {object} obj - The object to convert.
 * @returns {string} - The query string.
 */
export const parseObjectToQueryString = (obj: {
  [key: string]: any;
}): string => {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
};

/**
 * Selects a random element from an array.
 * @param {T[]} array - The array from which to select a random element.
 * @returns {T | undefined} - The randomly selected element, or undefined if the array is empty.
 */
export const selectRandom = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
