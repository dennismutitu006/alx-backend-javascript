process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Read input from stdin
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
});
