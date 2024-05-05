// Remove white spaces from a string 
function removeWhitespace(string){
    return string.replace(/\s/g, "");
}
console.log(removeWhitespace("Hello     , World "))