/**
 * 10_multiplicationTable.js
 * Function that prints the multiplication table of a given number (1 to 10).
 * Then uses the function to print tables for numbers 1 through 10.
 */

function printMultiplicationTable(number) {
  console.log(`\n--- Multiplication table of ${number} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Print the multiplication table for numbers 1 through 10
for (let n = 1; n <= 10; n++) {
  printMultiplicationTable(n);
}
