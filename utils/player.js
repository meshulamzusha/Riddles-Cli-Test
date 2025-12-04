export function createPlayer(name) {
    return {
        name: name,
        times: []
    }
}

export function addSolveTime(player, seconds) {
    player.times.push(seconds)
}


export function showStats(player) {
    const totalTime = player.times.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );

    const averageTime = Math.floor(totalTime / player.times.length)

    console.log(`Total time: ${totalTime} Average time: ${averageTime}`);    
}