/**
 * 05_getDate.js
 * Arrow function that returns the current date and time
 * in the format YYYY-MM-DD HH:MM:SS.
 */

const getFormattedDate = () => {
  const now = new Date();

  // Pad single-digit values with a leading zero
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// Example usage
console.log("Current date and time:", getFormattedDate());
