const input = process.argv[2];

if (input === undefined) {
  process.exit(0);
}

for (let i = 0; i < input.length; i++) {
  if (input[i] === "@") {
    console.log("Has @");
    process.exit(0);
  }
}
console.log("No @");
