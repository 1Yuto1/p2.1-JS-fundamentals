// Arrow function to generate a random integer between min and max (inclusive)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to print 10 random numbers for a given range
function printRandomNumbers(min, max) {
  console.log(`\n--- 10 random numbers between ${min} and ${max} ---`);
  
  // Loop 10 times to generate and log each number
  for (let i = 0; i < 10; i++) {
    console.log(randomInt(min, max));
  }
}

// Test calls with the required ranges
printRandomNumbers(0, 99999);
printRandomNumbers(10, 40);
printRandomNumbers(18, 90);
printRandomNumbers(1980, 2020);