# saviourjs

A collection of utility functions built to save your ass. It includes functions for common operations like string manipulation, array manipulation, object manipulation, and more.

## Installation

You can install `saviourjs` using npm:

```sh
npm install saviourjs
```

Or using yarn:

```sh
yarn add saviourjs
```

Or using pnpm:

```sh
pnpm add saviourjs
```

## Usage

<!-- prettier-ignore-start -->
| Function                     | Description                                      | Parameters                               |
| ---------------------------- | ------------------------------------------------ | ---------------------------------------- |
| `slugify`                  | Converts a string into a URL-friendly slug.      | `text: string`                         |
| `getNthLetter`             | Gets the nth letter from a string.               | `text: string, n: number`              |
| `getFirstLetter`           | Gets the first letter of a string.               | `text: string`                         |
| `getLastLetter`            | Gets the last letter of a string.                | `text: string`                         |
| `capitalize`               | Capitalizes the first letter of a string.        | `text: string`                         |
| `reverseString`            | Reverses a string.                               | `text: string`                         |
| `isPalindrome`             | Checks if a string is a palindrome.              | `text: string`                         |
| `truncate`                 | Truncates a string to a specified length.        | `text: string, length: number`         |
| `deepClone`                | Creates a deep clone of an object.               | `obj: T`                               |
| `isEmpty`                  | Checks if a value is empty.                      | `value: any`                           |
| `isEmail`                  | Validates an email address.                      | `email: string`                        |
| `camelCase`                | Converts a string to camelCase.                  | `text: string`                         |
| `kebabCase`                | Converts a string to kebab-case.                 | `text: string`                         |
| `snakeCase`                | Converts a string to snake_case.                 | `text: string`                         |
| `randomString`             | Generates a random string of specified length.   | `length: number`                       |
| `flattenArray`             | Flattens a nested array.                         | `array: any[]`                         |
| `uniq`                     | Removes duplicate values from an array.          | `array: any[]`                         |
| `chunk`                    | Splits an array into chunks of a specified size. | `array: T[], size: number`             |
| `shuffleArray`             | Randomly shuffles an array.                      | `array: T[]`                           |
| `isEqual`                  | Performs a deep comparison between two values.   | `value: any, other: any`               |
| `groupBy`                  | Groups elements of an array based on a key.      | `array: T[], key: ((item: T) => string) | keyof T` |
| `formatDate`               | Formats a date into a readable string.           | `date: Date, format: string`           |
| `parseQueryStringToObject` | Parses a query string into an object.            | `queryString: string`                  |
| `parseObjectToQueryString` | Converts an object into a query string.          | `obj: { [key: string]: any }`          |
| `selectRandom`             | Selects a random element from an array.          | `array: T[]`                           |
<!-- prettier-ignore-end -->
