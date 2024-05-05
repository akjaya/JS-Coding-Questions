var input = "Checking for longest word";

function checkLongestWord(string){
    const words = string.split(" ");
    let longestWord = "";
    for ( let word of words){
        if( word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord
}

console.log(checkLongestWord(input));