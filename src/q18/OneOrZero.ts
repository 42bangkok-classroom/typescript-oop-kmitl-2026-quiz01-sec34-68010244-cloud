const input = process.argv[2];
const size = Number(input);

if (!Number.isInteger(size) || size <= 0) {
  process.exit(0);
}

let output: string[] = [];

for (let i = 1; i <= size; i++) {
  const digit = i % 2 === 1 ? "1" : "0";
  output.push(digit.repeat(size));
}

console.log(output.join("\n"));
