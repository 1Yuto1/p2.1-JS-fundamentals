/**
 * 09_message.js
 * Function that takes a name and a favorite color as arguments
 * and returns a sentence using template literals.
 */

function buildMessage(name, color) {
  return `Hello ${name}, your favorite color is ${color}!`;
}

// Example usage
console.log(buildMessage("Victor", "blue"));
console.log(buildMessage("Maria", "red"));
console.log(buildMessage("John", "green"));
