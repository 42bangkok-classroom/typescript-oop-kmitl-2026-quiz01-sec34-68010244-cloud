const A = Number(process.argv[2]);

if (A === undefined) {
  process.exit(0);
}

if (isNaN(A)) {
  process.exit(0);
}
for (let B = 0; B <= A ; B = B+2) {
  console.log(B);
}


