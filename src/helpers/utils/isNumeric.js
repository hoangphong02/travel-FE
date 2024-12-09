/* eslint-disable no-restricted-globals */

/**
 * console..log(isNumeric(123)); // true
 * console..log(isNumeric(123aa)); // false
 * console..log(isNumeric(abc)); // false
 */

export const isNumeric = (num) => !isNaN(num);
