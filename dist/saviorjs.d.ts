/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The text to slugify.
 * @returns {string} - The slugified text.
 */
export declare const slugify: (text: string) => string;
/**
 * Gets the nth letter from a string.
 * @param {string} text - The text to get the letter from.
 * @param {number} n - The position of the letter (0-based index).
 * @returns {string} - The Nth letter of the string.
 */
export declare const getNthLetter: (text: string, n: number) => string;
/**
 * Gets the first letter of a string.
 * @param {string} text - The text to get the letter from.
 * @returns {string} - The first letter of the string.
 */
export declare const getFirstLetter: (text: string) => string;
/**
 * Gets the last letter of a string.
 * @param {string} text - The text to get the letter from.
 * @returns {string} - The last letter of the string.
 */
export declare const getLastLetter: (text: string) => string;
/**
 * Capitalizes the first letter of a string.
 * @param {string} text - The text to capitalize.
 * @returns {string} - The capitalized text.
 */
export declare const capitalize: (text: string) => string;
/**
 * Reverses a string.
 * @param {string} text - The text to reverse.
 * @returns {string} - The reversed text.
 */
export declare const reverseString: (text: string) => string;
/**
 * Checks if a string is a palindrome.
 * @param {string} text - The text to check.
 * @returns {boolean} - True if the text is a palindrome, false otherwise.
 */
export declare const isPalindrome: (text: string) => boolean;
/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param {string} text - The text to truncate.
 * @param {number} length - The maximum length of the truncated text.
 * @returns {string} - The truncated text.
 */
export declare const truncate: (text: string, length: number) => string;
/**
 * Creates a deep clone of an object.
 * @param {T} obj - The object to clone.
 * @returns {T} - The cloned object.
 */
export declare const deepClone: <T>(obj: T) => T;
/**
 * Checks if a value is empty (null, undefined, empty array, or empty object).
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is empty, false otherwise.
 */
export declare const isEmpty: (value: any) => boolean;
/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
export declare const isEmail: (email: string) => boolean;
/**
 * Converts a string to camelCase.
 * @param {string} text - The text to convert.
 * @returns {string} - The camelCased text.
 */
export declare const camelCase: (text: string) => string;
/**
 * Converts a string to kebab-case.
 * @param {string} text - The text to convert.
 * @returns {string} - The kebab-cased text.
 */
export declare const kebabCase: (text: string) => string;
/**
 * Converts a string to snake_case.
 * @param {string} text - The text to convert.
 * @returns {string} - The snake_cased text.
 */
export declare const snakeCase: (text: string) => string;
/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the random string.
 * @returns {string} - The random string.
 */
export declare const randomString: (length: number) => string;
/**
 * Flattens a nested array.
 * @param {any[]} array - The array to flatten.
 * @returns {any[]} - The flattened array.
 */
export declare const flattenArray: (array: any[]) => any[];
/**
 * Removes duplicate values from an array.
 * @param {any[]} array - The array to deduplicate.
 * @returns {any[]} - The deduplicated array.
 */
export declare const uniq: (array: any[]) => any[];
/**
 * Splits an array into chunks of a specified size.
 * @param {T[]} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} - The array of chunks.
 */
export declare const chunk: <T>(array: T[], size: number) => T[][];
/**
 * Randomly shuffles an array.
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} - The shuffled array.
 */
export declare const shuffleArray: <T>(array: T[]) => T[];
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param {any} value - The first value.
 * @param {any} other - The second value.
 * @returns {boolean} - True if the values are equivalent, false otherwise.
 */
export declare const isEqual: (value: any, other: any) => boolean;
/**
 * Groups the elements of an array based on a given key or function.
 * @param {T[]} array - The array to group.
 * @param {Function | string} key - The key or function to group by.
 * @returns {object} - The grouped object.
 */
export declare const groupBy: <T>(array: T[], key: ((item: T) => string) | keyof T) => {
    [key: string]: T[];
};
/**
 * Formats a date into a readable string.
 * @param {Date} date - The date to format.
 * @param {string} format - The format string.
 * @returns {string} - The formatted date string.
 */
export declare const formatDate: (date: Date, format: string) => string;
/**
 * Parses a query string into an object.
 * @param {string} queryString - The query string to parse.
 * @returns {object} - The parsed query object.
 */
export declare const parseQueryStringToObject: (queryString: string) => {
    [key: string]: string;
};
/**
 * Converts an object into a query string.
 * @param {object} obj - The object to convert.
 * @returns {string} - The query string.
 */
export declare const parseObjectToQueryString: (obj: {
    [key: string]: any;
}) => string;
/**
 * Selects a random element from an array.
 * @param {T[]} array - The array from which to select a random element.
 * @returns {T | undefined} - The randomly selected element, or undefined if the array is empty.
 */
export declare const selectRandom: <T>(array: T[]) => T | undefined;
