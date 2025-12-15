const args = process.argv.slice(2);

const numbers = args.map(Number);

if (numbers.length === 0) {
  process.exit(0);
}

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max.toString());

