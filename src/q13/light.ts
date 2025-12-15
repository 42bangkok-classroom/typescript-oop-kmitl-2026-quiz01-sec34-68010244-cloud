const input = process.argv[2];

if (input === undefined) {
  console.log("Unknown");
  process.exit(0);
}

const color = input.toLowerCase();

if (color === "red") {
  console.log("Stop");
} else if (color === "yellow") {
  console.log("Caution");
} else if (color === "green") {
  console.log("Go");
} else {
  console.log("Unknown");
}
