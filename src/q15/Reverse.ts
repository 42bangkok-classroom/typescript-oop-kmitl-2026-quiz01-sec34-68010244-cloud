const input = process.argv[2];

if (input === undefined) {
  process.exit(0);
}

let reversed = "";

for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}

console.log(reversed);
