const arg = process.argv[2];

if (arg === undefined) {
  process.exit(0);
}

const n = Number(arg);
if (Number.isNaN(n)) {
  process.exit(0);
}

for (let B = 0; B <= n; B = B + 2) {
  console.log(B);
 }
