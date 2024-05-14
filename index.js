import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "Player1",
        message: "Player1 Choose your weapon",
        type: "list",
        choices: ["Rock", "Paper", "Scissor"]
    },
    {
        name: "Player2",
        message: "Player2 Choose your weapon",
        type: "list",
        choices: ["Rock", "Paper", "Scissor"]
    }
]);
if (answer.Player1 === answer.Player2) {
    console.log(chalk.red("ITS A TIE"));
}
else if (answer.Player1 === "Rock" && answer.Player2 === "Scissor") {
    console.log(chalk.yellow("PLAYER 1 WIN THE MATCH"));
}
else if (answer.Player1 === "Paper" && answer.Player2 === "Rock") {
    console.log(chalk.yellow("PLAYER 1 WIN THE MATCH"));
}
else if (answer.Player1 === "Scissor" && answer.Player2 === "Paper") {
    console.log(chalk.yellow("PLAYER 1 WIN THE MATCH"));
}
else {
    console.log(chalk.green("PLAYER2 WIN THE MATCH"));
}
