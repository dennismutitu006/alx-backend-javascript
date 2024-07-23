// 1-stdin.js
// Print the welcome message
console.log('Welcome to Holberton School, what is your name?');
// Read input from stdin
process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
});
