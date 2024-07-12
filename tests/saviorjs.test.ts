import {
  slugify,
  getNthLetter,
  getFirstLetter,
  getLastLetter,
  capitalize,
  reverseString,
  isPalindrome,
  truncate,
  deepClone,
  isEmpty,
  isEmail,
  camelCase,
  kebabCase,
  snakeCase,
  randomString,
  flattenArray,
  uniq,
  chunk,
  shuffleArray,
  isEqual,
  groupBy,
  formatDate,
  parseQueryStringToObject,
  parseObjectToQueryString,
  selectRandom,
} from "../src/saviorjs";

describe("Utility Functions", () => {
  test("slugify", () => {
    expect(slugify("Hello World!")).toBe("hello-world");
    expect(slugify("  Multiple   Spaces  ")).toBe("multiple-spaces");
  });

  test("getNthLetter", () => {
    expect(getNthLetter("hello", 1)).toBe("e");
    expect(getNthLetter("hello", 5)).toBe("");
  });

  test("getFirstLetter", () => {
    expect(getFirstLetter("hello")).toBe("h");
    expect(getFirstLetter("")).toBe("");
  });

  test("getLastLetter", () => {
    expect(getLastLetter("hello")).toBe("o");
    expect(getLastLetter("")).toBe("");
  });

  test("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("Hello");
  });

  test("reverseString", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("isPalindrome", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });

  test("truncate", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
    expect(truncate("hello", 10)).toBe("hello");
  });

  test("deepClone", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  test("isEmpty", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test("isEmail", () => {
    expect(isEmail("test@example.com")).toBe(true);
    expect(isEmail("invalid-email")).toBe(false);
  });

  test("camelCase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  test("kebabCase", () => {
    expect(kebabCase("hello world")).toBe("hello-world");
  });

  test("snakeCase", () => {
    expect(snakeCase("hello world")).toBe("hello_world");
  });

  test("randomString", () => {
    const randomStr = randomString(10);
    expect(randomStr).toHaveLength(10);
    expect(typeof randomStr).toBe("string");
  });

  test("flattenArray", () => {
    expect(flattenArray([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("uniq", () => {
    expect(uniq([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("chunk", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test("shuffleArray", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray([...array]);
    expect(shuffled).toHaveLength(array.length);
    expect(new Set(shuffled)).toEqual(new Set(array));
  });

  test("isEqual", () => {
    expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  test("groupBy", () => {
    const array = [
      { category: "fruit", name: "apple" },
      { category: "fruit", name: "banana" },
      { category: "vegetable", name: "carrot" },
    ];
    const grouped = groupBy(array, "category");
    expect(grouped).toEqual({
      fruit: [
        { category: "fruit", name: "apple" },
        { category: "fruit", name: "banana" },
      ],
      vegetable: [{ category: "vegetable", name: "carrot" }],
    });
  });

  test("formatDate", () => {
    const date = new Date("2020-01-01T12:34:56");
    expect(formatDate(date, "YYYY-MM-DD")).toBe("2020-01-01");
    expect(formatDate(date, "HH:mm:ss")).toBe("12:34:56");
  });

  test("parseQueryStringToObject", () => {
    const queryString = "?name=John&age=30&city=New%20York";
    const parsedObject = parseQueryStringToObject(queryString);
    expect(parsedObject).toEqual({ name: "John", age: "30", city: "New York" });
  });

  test("parseObjectToQueryString", () => {
    const obj = { name: "John", age: 30, city: "New York" };
    const queryString = parseObjectToQueryString(obj);
    expect(queryString).toBe("name=John&age=30&city=New%20York");
  });

  test("selectRandom", () => {
    const array = [1, 2, 3, 4, 5];
    const randomElement = selectRandom(array);
    expect(array).toContain(randomElement);
  });
});
