

let arr = [1,9,3,4,56,90];


function sort(arr,typeOfSorting){

let obj = {
    ascending: (a,b)=> a - b, 
    descending: (a,b)=> b-a
}
return arr.sort(obj[typeOfSorting])
}
console.log(sort(arr,'descending')); 