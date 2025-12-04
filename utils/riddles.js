import { questionFactory } from "./generalUtils.js";
import { answerMultipleChoiceQuestion } from "./generalUtils.js";


function askAnswerQuestion(riddle) {
    const answerRiddleQuestion = questionFactory(`${riddle.taskDescription}: `);
    let isCorrect = false;

    while (!isCorrect) {
        let answer = answerRiddleQuestion()
        
        if (answer == riddle.correctAnswer) {
            console.log("Correct!");
            isCorrect = true
        } else {
            console.log("Try again");
        }
    }
}


export function askRiddle(riddle) {
    console.log(`Riddle ${riddle.id}: ${riddle.name}`);

    let isCorrect = false;

    if (Object.hasOwn(riddle, "choices")) {

        while (!isCorrect) { 
            console.log(riddle.taskDescription);
            const index = answerMultipleChoiceQuestion(riddle.choices)
            
            if (index == riddle.correctAnswer) {
                console.log("Correct!");
                isCorrect = true
            } else {
                console.log("Try again");
            }
        }
    } else {
        askAnswerQuestion(riddle)
    }
}
