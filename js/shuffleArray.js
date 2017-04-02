function shuffle(inputArray) {
    var shuffledArray = Array.from(inputArray);
    var tmp, current, top = shuffledArray.length;
    if(top) while(--top) {
        current = ~~(Math.random() * (top + 1));
        tmp = shuffledArray[current];
        shuffledArray[current] = shuffledArray[top];
        shuffledArray[top] = tmp;
    }
    return shuffledArray;
}