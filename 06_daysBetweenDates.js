/**
 * 06_daysBetweenDates.js
 * Normal function that calculates the number of days between two given dates.
 * Accepts Date objects or valid date strings (e.g. "2024-01-01").
 */

function daysBetweenDates(date1, date2) {
  // Convert to Date objects if strings are passed
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Difference in milliseconds
  const diffMs = Math.abs(d2.getTime() - d1.getTime());

  // Convert milliseconds to days (1000 ms * 60 s * 60 min * 24 h)
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
}

// Example usage
console.log("Days between 2024-01-01 and 2024-12-31:", daysBetweenDates("2024-01-01", "2024-12-31"));
console.log("Days between 2023-06-15 and 2024-06-15:", daysBetweenDates("2023-06-15", "2024-06-15"));
