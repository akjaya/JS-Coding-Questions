function checkPalindrome(string){
    let reversedString = string.split("").reverse().join("");
    if( string === reversedString){
        console.log(string + " is a Palindrome")
    }else{
        console.log(string + " not a Palindrome");
    }
}

checkPalindrome("malayalam")