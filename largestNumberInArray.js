// Find the largest number in an array 
function largestNumberInArrayTraditionalWay(arr){
    let largestArray = arr[0];
    for( let i=0; i< arr.length ;i++){
        if(arr[i]> arr[i+1]){
            largestArray = arr[i]
        }
    }
    console.log("The largest number is ", largestArray)
}

largestNumberInArrayTraditionalWay([1,34,57,79,23,67])

function largestNumberInArrayShortWay(arr){
return arr.reduce(function(previous,current){
            return previous>current ? previous : current })
}

largestNumberInArrayShortWay([1,34,57,79,23,67])
console.log(largestNumberInArrayShortWay([1,34,57,79,121,67]))

