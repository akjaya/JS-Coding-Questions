var input = "A whole long sentence it is";
var temp = input.split(" ")
    .map(individualWord => individualWord.split("").reverse().join(""))
    .join(" ");
var output = temp.split("").reverse().join("");

console.log(output)