

function zeroTo100([number]) {
    let num = Number(number);
    let ednocifreno = Number(number % 10);
    let dvucifreno = (num > 9 && num < 100)
    let edinici = number % 10
    let des = (Math.trunc(num / 10)) * 10;

    if (num < 10) {
       
        if (edinici === 9) {
             edinici === "nine";
             console.log("nine");
        } else if (edinici === 8) {
            console.log("eight");
        } else if (edinici === 7) {
            console.log("seven");
        } else if (edinici === 6) {
            console.log("six");
        } else if (edinici === 5) {
            console.log("five");
        } else if (edinici === 4) {
            console.log("four");
        } else if (edinici === 3) {
            console.log("tree");
        } else if (edinici === 2) {
            console.log("two");
        } else if (edinici === 1) {
            console.log("one");
        } else if (edinici === 0) {
            console.log("zero");
        } 
    } if (num <= 19) {
    
        if (num == 10) {
            console.log("ten");
        } else if (num == 11) {
            console.log("eleven");
        } else if (num == 12) {
            console.log("twelve");
        } else if (num == 13) {
            console.log("thirteen");
        } else if (num == 14) {
            console.log("fourteen");
            
        } else if (num == 14) {
            console.log("fourteen");
        } else if (num == 15) {
            console.log("fifteen");
        } else if (num == 16) {
            console.log("sixteen");
        } else if (num == 17) {
            console.log("seventeen");
        } else if (num == 18) {
            console.log("eighteen");
        } else if (num == 19) {
            console.log("nineteen");
        } 
    } else if (num >= 20 && num < 100) {
        if (des === 20) {
            console.log(`twenty ${edinici}`);
        } if (des === 30) {
            console.log("thirty");
        } if (des === 40) {
            console.log("forty");
        } if (des === 50) {
            console.log("fifty");
        } if (des === 60) {
            console.log("sixty");
        } if (des === 70) {
            console.log("seventy + $()");
        } if (des === 80) {
            console.log("eighty");
        } if (des === 90) {
            console.log("ninty");

        } 
    }
}
zeroTo100([21]);