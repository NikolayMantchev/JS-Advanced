function isEven ([arg1]){
    let num = parseInt(arg1);
        if(num % 2 === 0){
            console.log ("even");
        } else {
            console.log("odd");
        }
}
isEven([12])