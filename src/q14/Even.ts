const arg = process.argv[2];
if (arg === undefined) {
  process.exit(0);
}

const N = Number(arg);

if (Number.isNaN(N)) {
  process.exit(0);
}

for (let i = 0; i <= N; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
