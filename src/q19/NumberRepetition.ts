const input = process.argv[2];
const size = Number(input);

if (!Number.isInteger(size) || size <= 0) {
  process.exit(0);
}

let result: string[] = [];

for (let i = 1; i <= size; i++) {
  result.push(String(i).repeat(size));
}

console.log(result.join("\n"));
