const input = process.argv[2];
const size = Number(input);

if (!Number.isInteger(size) || size <= 0) {
  process.exit(0);
}

let output: string[] = [];

for (let i = 1; i <= size; i++) {
  output.push("*".repeat(i));
}

console.log(output.join("\n"));
