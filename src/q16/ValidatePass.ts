const password = process.argv[2];

if (password === undefined) {
  console.log("Invalid");
  process.exit(0);
}

if (password.length < 8) {
  console.log("Invalid");
  process.exit(0);
}

let hasUpper = false;
let hasLower = false;
let hasNumber = false;

for (let i = 0; i < password.length; i++) {
  const ch = password[i];

  if (ch >= "A" && ch <= "Z") {
    hasUpper = true;
  } else if (ch >= "a" && ch <= "z") {
    hasLower = true;
  } else if (ch >= "0" && ch <= "9") {
    hasNumber = true;
  }
}

if (hasUpper && hasLower && hasNumber) {
  console.log("Valid");
} else {
  console.log("Invalid");
}