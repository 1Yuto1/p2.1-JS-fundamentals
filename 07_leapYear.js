/**
 * 07_leapYear.js
 * Arrow function that checks if a given year is a leap year.
 *
 * Leap year rules:
 * 1. Divisible by 4 → leap year candidate
 * 2. BUT divisible by 100 → NOT a leap year
 * 3. UNLESS also divisible by 400 → leap year
 */

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Example usage
console.log("2024 is leap year?", isLeapYear(2024)); // true
console.log("2023 is leap year?", isLeapYear(2023)); // false
console.log("1900 is leap year?", isLeapYear(1900)); // false
console.log("2000 is leap year?", isLeapYear(2000)); // true
