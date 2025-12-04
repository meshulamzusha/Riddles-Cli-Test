import { createPlayer, addSolveTime, showStats } from "./player.js";
import { riddles } from "../riddles/exportAllRiddles.js";
import { questionFactory } from "./generalUtils.js";
import { askRiddle } from "./riddles.js";


function printWelcomeMessage() {
    console.log("?????Welcome To Banana riddle game?????");
}


function measureSolveTime(func, riddle) {
    const start = performance.now();
    func(riddle);
    const end = performance.now();

    return Math.floor((end - start) / 1000);
}


const nameQuestion = questionFactory("Enter your name: ");


export function game() {
    printWelcomeMessage();

    const playerName = nameQuestion();
    const player = createPlayer(playerName);

    for (const riddle of riddles) {
        const seconds = measureSolveTime(askRiddle, riddle);
        addSolveTime(player, seconds)
    }

    showStats(player)
}