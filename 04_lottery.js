
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const lotteryNumbers = new Set();

while (lotteryNumbers.size < 10) {
  
  let num = randomInt(0, 99999);
  let formatted = String(num).padStart(5, "0");
  lotteryNumbers.add(formatted);
}

console.log("--- 10 different lottery numbers ---");
let i = 1;
for (const number of lotteryNumbers) {
  console.log(`Lottery #${i}: ${number}`);
  i++;
}
