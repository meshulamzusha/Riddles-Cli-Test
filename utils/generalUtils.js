import { question, keyInSelect } from "readline-sync";


export function questionFactory(message) {
    return () => {
        const userInput = question(message);
        return userInput;
    }
}

export function answerMultipleChoiceQuestion(choices) {
    const index = keyInSelect(choices)
    
    return index
}