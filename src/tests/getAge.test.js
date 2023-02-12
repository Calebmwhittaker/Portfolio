import getAge from "../utilities/getAge.js";

it("returns the age of the user", () => {
  expect(typeof getAge()).toBe("number");
});
