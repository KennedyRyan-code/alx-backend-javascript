// Display welcome message
console.log("Welcome to Holberton School, what is your name?");

// Read user input
process.stdin.once('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${data}`);

    console.log("This important software is now closing");

    process.exit();
})