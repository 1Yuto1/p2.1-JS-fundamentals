/**
 * 11_secondsToEndOfCourse.js
 * Shows a message in the console every second with the
 * number of seconds remaining until the end of the course.
 *
 * Change the END_OF_COURSE date below to match the real date.
 * Press Ctrl+C to stop the countdown.
 */

// --- CHANGE THIS DATE to your actual end-of-course date ---
const END_OF_COURSE = new Date("2027-06-30T00:00:00");
// ----------------------------------------------------------

function getSecondsRemaining() {
  const now = new Date();
  const diffMs = END_OF_COURSE - now;
  return Math.floor(diffMs / 1000);
}

// Print immediately, then every second
console.log(`Seconds remaining to the end of the course: ${getSecondsRemaining()}`);

const intervalId = setInterval(() => {
  const remaining = getSecondsRemaining();

  if (remaining <= 0) {
    console.log("The course has ended!");
    clearInterval(intervalId);
    return;
  }

  console.log(`Seconds remaining to the end of the course: ${remaining}`);
}, 1000);
