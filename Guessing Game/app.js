let maxNum = parseInt(prompt("Enter Maximum Number"));
while (!maxNum) {
    maxNum = parseInt(prompt("Enter a valid number"));
}

let targetNum = Math.floor(Math.random() * maxNum) + 1;

let firstGuess = parseInt(prompt("Enter First Guess"));
let attempt = 1;
while (!firstGuess) {
    firstGuess = parseInt(prompt("Enter valid guess..."));
}

while (parseInt(firstGuess) !== targetNum) {
    if (firstGuess === 'q') break;
    attempt++;
    if (firstGuess > targetNum) {
        firstGuess = prompt("Number is Too High")
    } else {
        firstGuess = prompt("Number is Too Low")
    }
}

if (firstGuess === 'q') {
    console.log("OK! YOU QUIT!")
} else {
    console.log("Number is " + targetNum);
    console.log("It took you " + attempt + " attempts");
}