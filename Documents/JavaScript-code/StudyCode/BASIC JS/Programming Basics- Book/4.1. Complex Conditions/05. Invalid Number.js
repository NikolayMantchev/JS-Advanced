function invalid ([arg1]){
    let n = Number (arg1);
    let inRange = (n >= 100 && n <=200) || n ===0;
    if (!inRange){
            console.log("Invalid");
        }
}
invalid ([150]);