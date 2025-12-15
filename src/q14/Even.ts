const arg = process.argv[2];

if (arg === undefined) {
  process.exit(0);
}

const n = Number(arg);
if (Number.isNaN(n)) {
  process.exit(0);
}

for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
