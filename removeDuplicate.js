// Question: Remove duplicate elements from an array
var input = [1,2,3,45,5,5,6,76,6,8,1,0,0];

function removeDuplicateElementsTraditionalWay(arr){
    console.log("this is the Long Traditional Way to do it ")

    let uniqueElements =[];
    for( let i=0; i< arr.length; i++){
        if(uniqueElements.indexOf(arr[i]) === -1){
            uniqueElements.push(arr[i])
        }
    }
    return uniqueElements
}

console.log(removeDuplicateElementsTraditionalWay(input));

function removeDuplicateShortWay(array){
    console.log("this is the Short Way to do it ")
     return [... new Set(array)]
}
console.log(removeDuplicateShortWay(input))