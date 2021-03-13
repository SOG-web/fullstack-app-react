const { palindrome, average } = require('../utils/for_testing');

test('palindrome of a', () => {
  const result = palindrome('a');

  expect(result).toBe('a');
});

test('palindrome of react', () => {
  const result = palindrome('react');

  expect(result).toBe('tcaer');
});

test('palindrome of soap salesman', () => {
  const result = palindrome('soap salesman');

  expect(result).toBe('namselaspaos');
});

describe('average', () => {
  test('of one value is the value itself', () => {
    expect(average([1])).toBe(1);
  });

  test('of many is calculated right', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  test('of empty array is zero', () => {
    expect(average([])).toBe(0);
  });
});
