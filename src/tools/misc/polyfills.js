export const valuesPolyfill = function values (object) { // IE11 +
  return Object.keys(object).map(key => object[key]);
};