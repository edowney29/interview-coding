/**
 * Eric Downey - 6/6/2020
 * Formatted with Prettier
 */

"use strict";

const _ = require("lodash");

/**
 * Validate LISP string
 * @param {string} str
 * @return {boolean}
 */
function isValidLisp(str) {
  const arrayLisp = tokenize(str); // Simple way to parse LISP string
  const stack = [];
  const map = {
    "(": ")",
  };

  _.forEach(arrayLisp, (value, index) => {
    if (value === "(") stack.push(value);
    if (value === ")") {
      let last = stack.pop();
      if (value !== map[last]) {
        return false; // If not nested correctly return false
      }
    }
  });

  // Ensure stack is empty and LISP is closed
  if (stack.length !== 0) {
    return false;
  }

  return true;
}

module.exports = isValidLisp;

// https://medium.com/@nidhinp.412/lisp-interpreter-in-javascript-f5d5cfe885f2
function tokenize(str) {
  return str.replace(/\(/g, " ( ").replace(/\)/g, " ) ").trim().split(/\s+/);
}
