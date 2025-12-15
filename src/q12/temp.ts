const arg = process.argv[2];

if (arg === undefined) {
  process.exit(0);
}

const temp = Number(arg);

if (Number.isNaN(temp)) {
  process.exit(0);
}

if (temp > 30) {
  console.log("Hot");
} else {
  console.log("Normal");
}
