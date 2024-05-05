// Anagrams are words that have the same alphabets
function areAnagrams( string1, string2){
    if(string1.split("").sort().join("") === string2.split("").sort().join("")){
        console.log("Both the string are an Anagram");
    }else{
        console.log("Not an anagram")
    }
}

areAnagrams("listen","silent")