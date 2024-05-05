// Question: write a function that returns the number of vowels of a String

function vowelsCount(string){
    let vowels = ["a","e","i","o","u"];
    let count = 0;
    for (let alphabet of string ){
        if(vowels.includes(alphabet)){
            count++
        } 
    }
    console.log( "The number of vowels are " + count);

}

vowelsCount("Hello World")