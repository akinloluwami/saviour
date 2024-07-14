"use strict";
/* A collection of utility functions built to save your ass. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = exports.selectRandom = exports.parseObjectToQueryString = exports.parseQueryStringToObject = exports.formatDate = exports.groupBy = exports.isEqual = exports.shuffleArray = exports.chunk = exports.uniq = exports.flattenArray = exports.randomString = exports.snakeCase = exports.kebabCase = exports.camelCase = exports.isEmail = exports.isEmpty = exports.deepClone = exports.truncate = exports.isPalindrome = exports.reverseString = exports.capitalize = exports.getLastLetter = exports.getFirstLetter = exports.getNthLetter = exports.slugify = void 0;
/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The text to slugify.
 * @returns {string} - The slugified text.
 */
const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};
exports.slugify = slugify;
/**
 * Gets the nth letter from a string.
 * @param {string} text - The text to get the letter from.
 * @param {number} n - The position of the letter (0-based index).
 * @returns {string} - The Nth letter of the string.
 */
const getNthLetter = (text, n) => {
    if (n < 0 || n >= text.length) {
        return "";
    }
    return text.charAt(n);
};
exports.getNthLetter = getNthLetter;
/**
 * Gets the first letter of a string.
 * @param {string} text - The text to get the letter from.
 * @returns {string} - The first letter of the string.
 */
const getFirstLetter = (text) => {
    return text.charAt(0);
};
exports.getFirstLetter = getFirstLetter;
/**
 * Gets the last letter of a string.
 * @param {string} text - The text to get the letter from.
 * @returns {string} - The last letter of the string.
 */
const getLastLetter = (text) => {
    return text.charAt(text.length - 1);
};
exports.getLastLetter = getLastLetter;
/**
 * Capitalizes the first letter of a string.
 * @param {string} text - The text to capitalize.
 * @returns {string} - The capitalized text.
 */
const capitalize = (text) => {
    if (text.length === 0)
        return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
exports.capitalize = capitalize;
/**
 * Reverses a string.
 * @param {string} text - The text to reverse.
 * @returns {string} - The reversed text.
 */
const reverseString = (text) => {
    return text.split("").reverse().join("");
};
exports.reverseString = reverseString;
/**
 * Checks if a string is a palindrome.
 * @param {string} text - The text to check.
 * @returns {boolean} - True if the text is a palindrome, false otherwise.
 */
const isPalindrome = (text) => {
    const cleanedText = text.replace(/[\W_]/g, "").toLowerCase();
    return cleanedText === cleanedText.split("").reverse().join("");
};
exports.isPalindrome = isPalindrome;
/**
 * Truncates a string to a specified length and adds an ellipsis.
 * @param {string} text - The text to truncate.
 * @param {number} length - The maximum length of the truncated text.
 * @returns {string} - The truncated text.
 */
const truncate = (text, length) => {
    if (text.length <= length)
        return text;
    return text.slice(0, length) + "...";
};
exports.truncate = truncate;
/**
 * Creates a deep clone of an object.
 * @param {T} obj - The object to clone.
 * @returns {T} - The cloned object.
 */
const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
exports.deepClone = deepClone;
/**
 * Checks if a value is empty (null, undefined, empty array, or empty object).
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is empty, false otherwise.
 */
const isEmpty = (value) => {
    if (value == null)
        return true;
    if (Array.isArray(value) || typeof value === "string")
        return value.length === 0;
    if (typeof value === "object")
        return Object.keys(value).length === 0;
    return false;
};
exports.isEmpty = isEmpty;
/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.isEmail = isEmail;
/**
 * Converts a string to camelCase.
 * @param {string} text - The text to convert.
 * @returns {string} - The camelCased text.
 */
const camelCase = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};
exports.camelCase = camelCase;
/**
 * Converts a string to kebab-case.
 * @param {string} text - The text to convert.
 * @returns {string} - The kebab-cased text.
 */
const kebabCase = (text) => {
    return text.replace(/\s+/g, "-").toLowerCase();
};
exports.kebabCase = kebabCase;
/**
 * Converts a string to snake_case.
 * @param {string} text - The text to convert.
 * @returns {string} - The snake_cased text.
 */
const snakeCase = (text) => {
    return text.replace(/\s+/g, "_").toLowerCase();
};
exports.snakeCase = snakeCase;
/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the random string.
 * @returns {string} - The random string.
 */
const randomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.randomString = randomString;
/**
 * Flattens a nested array.
 * @param {any[]} array - The array to flatten.
 * @returns {any[]} - The flattened array.
 */
const flattenArray = (array) => {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat((0, exports.flattenArray)(val)) : acc.concat(val), []);
};
exports.flattenArray = flattenArray;
/**
 * Removes duplicate values from an array.
 * @param {any[]} array - The array to deduplicate.
 * @returns {any[]} - The deduplicated array.
 */
const uniq = (array) => {
    return Array.from(new Set(array));
};
exports.uniq = uniq;
/**
 * Splits an array into chunks of a specified size.
 * @param {T[]} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {T[][]} - The array of chunks.
 */
const chunk = (array, size) => {
    if (size <= 0)
        throw new Error("Size should be a positive integer.");
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};
exports.chunk = chunk;
/**
 * Randomly shuffles an array.
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} - The shuffled array.
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
exports.shuffleArray = shuffleArray;
/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param {any} value - The first value.
 * @param {any} other - The second value.
 * @returns {boolean} - True if the values are equivalent, false otherwise.
 */
const isEqual = (value, other) => {
    if (value === other)
        return true;
    if (value == null ||
        other == null ||
        typeof value !== "object" ||
        typeof other !== "object") {
        return false;
    }
    const keysValue = Object.keys(value);
    const keysOther = Object.keys(other);
    if (keysValue.length !== keysOther.length)
        return false;
    for (const key of keysValue) {
        if (!keysOther.includes(key) || !(0, exports.isEqual)(value[key], other[key])) {
            return false;
        }
    }
    return true;
};
exports.isEqual = isEqual;
/**
 * Groups the elements of an array based on a given key or function.
 * @param {T[]} array - The array to group.
 * @param {Function | string} key - The key or function to group by.
 * @returns {object} - The grouped object.
 */
const groupBy = (array, key) => {
    return array.reduce((acc, item) => {
        const groupKey = typeof key === "function" ? key(item) : item[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(item);
        return acc;
    }, {});
};
exports.groupBy = groupBy;
/**
 * Formats a date into a readable string.
 * @param {Date} date - The date to format.
 * @param {string} format - The format string.
 * @returns {string} - The formatted date string.
 */
const formatDate = (date, format) => {
    const map = {
        MM: ("0" + (date.getMonth() + 1)).slice(-2),
        DD: ("0" + date.getDate()).slice(-2),
        YYYY: date.getFullYear().toString(),
        HH: ("0" + date.getHours()).slice(-2),
        mm: ("0" + date.getMinutes()).slice(-2),
        ss: ("0" + date.getSeconds()).slice(-2),
    };
    return format.replace(/MM|DD|YYYY|HH|mm|ss/g, (matched) => map[matched]);
};
exports.formatDate = formatDate;
/**
 * Parses a query string into an object.
 * @param {string} queryString - The query string to parse.
 * @returns {object} - The parsed query object.
 */
const parseQueryStringToObject = (queryString) => {
    return queryString
        .substring(1)
        .split("&")
        .reduce((acc, pair) => {
        const [key, value] = pair.split("=");
        acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
        return acc;
    }, {});
};
exports.parseQueryStringToObject = parseQueryStringToObject;
/**
 * Converts an object into a query string.
 * @param {object} obj - The object to convert.
 * @returns {string} - The query string.
 */
const parseObjectToQueryString = (obj) => {
    return Object.keys(obj)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join("&");
};
exports.parseObjectToQueryString = parseObjectToQueryString;
/**
 * Selects a random element from an array.
 * @param {T[]} array - The array from which to select a random element.
 * @returns {T | undefined} - The randomly selected element, or undefined if the array is empty.
 */
const selectRandom = (array) => {
    if (array.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
exports.selectRandom = selectRandom;
/**
 * Capitalizes the first letter of a given string and converts the rest to lowercase.
 *
 * @param {string} text - The string to be transformed.
 * @returns {string} - The transformed string with the first letter capitalized and the rest in lowercase.
 */
const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
